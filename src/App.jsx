import { useEffect, useState } from "react";
import { fetchDepartures } from "./api/entur";
import { getQuoteOfTheDay } from "./quotes";
import DepartureBoard from "./components/DepartureBoard";

// How often to re-fetch from Entur while the app is open in a browser tab.
// (This is unrelated to how often the battery-powered e-ink board itself
// wakes up later — that's controlled on the device side.)
const REFRESH_INTERVAL_MS = 60_000;
const CLOCK_TICK_MS = 1_000;

// The fixed route shown on the board. Only departures from its stop heading toward the given
// destination, on the given transport mode (a Bybanen tram line), are shown.
const ROUTES = [
  {
    stopId: "NSR:StopPlace:31377",
    label: "Brann stadion \u2192 Sentrum",
    mode: "tram",
    // Bybanen displays this direction as "Bergen sentrum", not "Byparken".
    destinationMatch: /sentrum/i,
    destinationLabel: "Sentrum",
    arrivalStop: "Byparken",
    walkMinutes: 6,
  },
];

function getConfig() {
  const params = new URLSearchParams(window.location.search);
  const capture = params.has("capture"); // bare board, no dev chrome — used for screenshotting
  return { capture };
}

export default function App() {
  const { capture } = getConfig();

  const [columns, setColumns] = useState(
    ROUTES.map((route) => ({ ...route, departures: [], error: null }))
  );
  const [updatedAt, setUpdatedAt] = useState(null);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const tick = setInterval(() => setNow(new Date()), CLOCK_TICK_MS);
    return () => clearInterval(tick);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const results = await Promise.all(
        ROUTES.map(async (route) => {
          try {
            const { departures } = await fetchDepartures(route.stopId, 20);
            const filtered = departures
              .filter(
                (d) =>
                  d.mode === route.mode &&
                  route.destinationMatch.test(d.destination)
              )
              .map((d) => {
                const stop = d.stops.find((s) => s.name === route.arrivalStop);
                // Ignore a stop time before departure (e.g. wrong service day).
                const arrivalTime =
                  stop && stop.arrivalTime > d.departureTime
                    ? stop.arrivalTime
                    : null;
                return { ...d, destination: route.destinationLabel, arrivalTime };
              })
              .slice(0, 6);
            return { ...route, departures: filtered, error: null };
          } catch (err) {
            return { ...route, departures: [], error: err.message };
          }
        })
      );
      if (!cancelled) {
        setColumns(results);
        setUpdatedAt(new Date());
      }
    }

    load();
    const poll = setInterval(load, REFRESH_INTERVAL_MS);
    return () => {
      cancelled = true;
      clearInterval(poll);
    };
  }, []);

  const board = (
    <DepartureBoard
      columns={columns}
      now={now}
      updatedAt={updatedAt}
      quote={getQuoteOfTheDay(now)}
    />
  );

  if (capture) {
    // Bare canvas only — this is what a headless-browser screenshot script
    // should point at (add ?capture=1 to the URL).
    return board;
  }

  return (
    <div className="preview-shell">
      {board}
      <p className="preview-note">
        This is a live preview at browser zoom. The e-ink panel will show
        this rendered as a static image, refreshed on its own schedule — add{" "}
        <code>?capture=1</code> to the URL to see the bare canvas a
        screenshot script would capture.
      </p>
    </div>
  );
}
