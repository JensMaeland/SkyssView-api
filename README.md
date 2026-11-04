# Transit departure board (Bergen)

A React app that shows live public transport departures for one stop, styled
for an e-ink display. Right now it runs as a normal web page; later, once
your Inkplate arrives, a headless-browser script on your Raspberry Pi will
screenshot this page and push the image to the panel.

Data comes from [Entur](https://developer.entur.no/), which covers all
public transport in Norway (bus, tram/Bybanen, ferry, rail) for free, no API
key required.

## 1. Find your stop ID

Entur identifies stops with IDs like `NSR:StopPlace:xxxxx`. To find yours:

1. Go to [Entur's journey planner](https://entur.no) and search for your
   stop (e.g. "Bergen busstasjon", "Byparken", whatever your closest stop
   is).
2. Click the stop, then open its departure list ("Se alle avganger").
3. The URL will contain the stop ID, e.g.
   `.../nearby?stop=NSR:StopPlace:548` — copy the
   `NSR:StopPlace:xxxxx` part.

If you're not sure which of several nearby stops/quays is the right one,
NSR:StopPlace IDs cover the whole stop (all platforms/quays combined),
which is usually what you want for a "departures near me" board.

## 2. Configure

```
cp .env.example .env
```

Edit `.env` and set:

```
VITE_ENTUR_STOP_ID=NSR:StopPlace:xxxxx
```

You can also override the stop per-URL without touching `.env`, e.g.
`http://localhost:5173/?stop=NSR:StopPlace:548` — handy for testing a
different stop quickly.

## 3. Run it

```
npm install
npm run dev
```

Open the printed localhost URL. You'll see the board in a preview shell
with some dev notes. Add `?capture=1` to the URL to see the bare board
canvas exactly as it'll be screenshotted later (e.g.
`http://localhost:5173/?capture=1`).

## Design notes

- The board renders to a fixed 800×600px canvas by default, matching the
  Inkplate 6's resolution. If you end up with different hardware, change
  `--board-w` / `--board-h` in `src/index.css`.
- Everything is pure black/white with no gradients or color reliance —
  e-ink can't render those well, and dithering grays creates visible noise.
  The one exception is the "due now" row, which inverts to black-on-white
  instead of using color, so it stays legible after dithering to 1-bit.
- Type is large and high-contrast on purpose; e-ink refreshes are slow, so
  the board is meant to be glanced at, not read closely.

## What's not built yet

This app fetches live data in the browser and re-polls every 30 seconds,
which is fine for development but **not** what you want on the actual
battery-powered device — that will fetch once per wake cycle, not
continuously poll. The next step (once your Inkplate + Pi are ready) is:

1. A small script on the Pi (Puppeteer/Playwright) that loads
   `http://localhost:5173/?capture=1` (or a built/served version of this
   app), screenshots the `.board` element, and dithers it to the panel's
   grayscale depth.
2. An Arduino/MicroPython sketch on the Inkplate that wakes on a timer,
   fetches that image from the Pi, displays it, and goes back to deep
   sleep.

Ask for help with either of these when you're ready — the screenshot/dither
script and the Inkplate sketch are both independent from this app.

## Client identification

Entur requires API consumers to identify themselves via a header (not a
secret key, just a name). This is already set in `src/api/entur.js` as
`personal-eink-departure-board` — feel free to rename it to something more
specific to you; it doesn't need to be registered anywhere.
