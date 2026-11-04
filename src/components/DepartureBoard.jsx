const MODE_ICON = {
  bus: "\u25A0", // solid square stands in for a bus glyph at e-ink-friendly sizes
  water: "\u25CF",
  rail: "\u25C6",
  coach: "\u25A0",
};

// Simple monochrome tram glyph, side profile — a colored emoji doesn't fit
// the black/white e-ink look, so this is drawn as a plain currentColor SVG.
function TramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 15.5V7c0-1.4 1.1-2.5 2.5-2.5h14c1.4 0 2.5 1.1 2.5 2.5v8.5z" />
      <line x1="2.5" y1="11" x2="21.5" y2="11" />
      <line x1="6.5" y1="6.5" x2="6.5" y2="11" />
      <line x1="10.5" y1="6.5" x2="10.5" y2="11" />
      <line x1="14.5" y1="6.5" x2="14.5" y2="11" />
      <line x1="18" y1="6.5" x2="18" y2="15.5" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

// Simple monochrome walking-person glyph, shown next to the leave-in time.
function WalkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <circle cx="13.5" cy="4" r="2" />
      <path d="M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z" />
    </svg>
  );
}

function formatEta(minutesUntil) {
  if (minutesUntil <= 0) return "NÅ";
  return `${minutesUntil} min`;
}

function formatClock(date) {
  return date.toLocaleTimeString("nb-NO", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatClockWithSeconds(date) {
  return date.toLocaleTimeString("nb-NO", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function formatDate(date) {
  return date.toLocaleDateString("nb-NO", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

function formatLeaveIn(minutes) {
  if (minutes <= 0) return "N\u00c5";
  if (minutes === 1) return "1 min";
  return `${minutes} min`;
}

function Column({ label, departures, walkMinutes, now, error }) {
  const liveDepartures = departures.map((dep) => ({
    ...dep,
    minutesUntil: Math.round((dep.departureTime - now) / 60000),
  }));

  // The star goes on the earliest departure you can still walk to in time;
  // once its leave-by moment passes, it's skipped in favor of the next one.
  const relevantIndex = liveDepartures.findIndex(
    (dep) => dep.minutesUntil - walkMinutes >= 0
  );

  // Show at most 4: the one just missed, the walkable one, and the next two.
  const windowStart = Math.max(0, (relevantIndex < 0 ? 0 : relevantIndex) - 1);
  const shownDepartures = liveDepartures.slice(windowStart, windowStart + 4);
  const shownRelevantIndex = relevantIndex - windowStart;

  return (
    <div className="board__column">
      <h2 className="board__column-label">{label}</h2>

      {error ? (
        <div className="board__error">{error}</div>
      ) : shownDepartures.length === 0 ? (
        <div className="board__empty">Ingen avganger i tidsvinduet</div>
      ) : (
        <div className="board__rows">
          {shownDepartures.map((dep, i) => {
            const due = dep.minutesUntil <= 0;
            const isRelevant = i === shownRelevantIndex;
            const leaveInMinutes = dep.minutesUntil - walkMinutes;
            return (
              <div
                className={`row${due ? " row--due" : ""}${
                  isRelevant ? " row--relevant" : ""
                }`}
                key={`${dep.line}-${dep.destination}-${i}`}
              >
                <div className="row__star">{isRelevant ? "\u2605" : ""}</div>
                <div className="row__mode">
                  {dep.mode === "tram" ? (
                    <TramIcon />
                  ) : (
                    MODE_ICON[dep.mode] ?? "\u25A0"
                  )}
                </div>
                <div className="row__destination">
                  <div className="row__destination-name">{dep.destination}</div>
                  <div className="row__arrival">
                    {formatClock(dep.departureTime)}
                    {dep.arrivalTime && ` \u2192 ${formatClock(dep.arrivalTime)}`}
                  </div>
                </div>
                <div className="row__times">
                  <div
                    className={`row__leave-in${
                      leaveInMinutes === 0 ? " row__leave-in--urgent" : ""
                    }`}
                  >
                    {leaveInMinutes < 0 ? (
                      "\u2013\u2013"
                    ) : (
                      <>
                        <WalkIcon /> {formatLeaveIn(leaveInMinutes)}
                      </>
                    )}
                  </div>
                  <div className="row__eta">{formatEta(dep.minutesUntil)}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function DepartureBoard({ columns, now, updatedAt, quote }) {
  return (
    <div className="board">
      <header className="board__header">
        <h1 className="board__stop-name">Avganger</h1>
        <div className="board__clock-block">
          <div className="board__clock-row">
            <div className="board__date">{formatDate(now)}</div>
            <div className="board__clock">{formatClockWithSeconds(now)}</div>
          </div>
          <div className="board__updated-at">
            oppdatert {updatedAt ? formatClockWithSeconds(updatedAt) : "\u2013"}
          </div>
        </div>
      </header>

      {quote && <div className="board__quote">{quote}</div>}

      <div className="board__columns">
        {columns.map((col) => (
          <Column
            key={col.stopId}
            label={col.label}
            departures={col.departures}
            walkMinutes={col.walkMinutes}
            now={now}
            error={col.error}
          />
        ))}
      </div>
    </div>
  );
}
