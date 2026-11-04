const TZ = "Europe/Oslo";
const MIN_S = 10;
const MAX_S = 86400;

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: TZ,
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
});

function osloSecondsOfDay(date) {
  const parts = formatter.formatToParts(date);
  const get = (type) => Number(parts.find((p) => p.type === type).value);
  // Some environments format midnight as 24.
  return (get("hour") % 24) * 3600 + get("minute") * 60 + get("second");
}

function parseClock(value, fallback) {
  const match = /^(\d{1,2}):(\d{2})$/.exec((value ?? "").trim());
  if (!match) return fallback;
  return Number(match[1]) * 3600 + Number(match[2]) * 60;
}

export function readSchedule(env) {
  const interval = Number(env.UPDATE_INTERVAL_S);
  return {
    startS: parseClock(env.UPDATE_START, 6 * 3600),
    endS: parseClock(env.UPDATE_END, 9 * 3600),
    interval: Number.isFinite(interval) && interval > 0 ? interval : 60,
  };
}

export function secondsUntilNextUpdate(schedule, date = new Date()) {
  const { startS, endS, interval } = schedule;
  const nowS = osloSecondsOfDay(date);

  let seconds;
  if (nowS >= startS && nowS < endS) {
    seconds = interval - (nowS % interval);
  } else {
    seconds = startS - nowS;
    if (seconds <= 0) seconds += 24 * 3600;
  }
  return Math.min(Math.max(Math.round(seconds), MIN_S), MAX_S);
}

// Connect-style middleware; env is read per request so changes need no code edits.
export function sleepMiddleware(getEnv) {
  return (req, res, next) => {
    if (req.method !== "GET" || req.url.split("?")[0] !== "/sleep") {
      return next();
    }
    const seconds = secondsUntilNextUpdate(readSchedule(getEnv()));
    console.log(
      `[sleep] ${new Date().toISOString()} ${req.socket.remoteAddress} -> ${seconds}`
    );
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Cache-Control", "no-store");
    res.end(String(seconds));
  };
}
