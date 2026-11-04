import puppeteer from "puppeteer";

const WIDTH = 800;
const HEIGHT = 600;

let browserPromise;

function getBrowser() {
  browserPromise ??= puppeteer
    .launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] })
    .catch((err) => {
      browserPromise = undefined;
      throw err;
    });
  return browserPromise;
}

async function renderBoard(origin) {
  const browser = await getBrowser();
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 1 });
    await page.goto(`${origin}/?capture=1`, { waitUntil: "networkidle0" });
    // "oppdatert –" is shown until the first Entur fetch has finished.
    await page.waitForFunction(
      () => {
        const el = document.querySelector(".board__updated-at");
        return el && !el.textContent.includes("\u2013");
      },
      { timeout: 15000 }
    );
    await page.evaluate(() => document.fonts.ready);
    const board = await page.$(".board");
    return Buffer.from(await board.screenshot({ type: "png" }));
  } finally {
    await page.close();
  }
}

// Serves the rendered board; `getOrigin` returns the app's own base URL.
export function departuresMiddleware(getOrigin) {
  return async (req, res, next) => {
    const path = req.url.split("?")[0];
    if (req.method !== "GET" || (path !== "/departures" && path !== "/departures.png")) {
      return next();
    }
    try {
      const png = await renderBoard(getOrigin());
      console.log(`[departures] ${new Date().toISOString()} ${req.socket.remoteAddress} -> ${png.length} bytes`);
      res.statusCode = 200;
      res.setHeader("Content-Type", "image/png");
      res.setHeader("Content-Length", png.length);
      res.setHeader("Cache-Control", "no-store");
      res.end(png);
    } catch (err) {
      console.error("[departures] render failed:", err.message);
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/plain");
      res.end("render failed");
    }
  };
}

export async function closeBrowser() {
  if (browserPromise) (await browserPromise).close();
}
