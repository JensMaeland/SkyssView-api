import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { sleepMiddleware } from './server/sleep.js'
import { departuresMiddleware, closeBrowser } from './server/departures.js'

// Serves GET /sleep (seconds until the display's next wake) and GET /departures (board PNG).
function sleepEndpoint(mode) {
  const getEnv = () => ({ ...loadEnv(mode, process.cwd(), ''), ...process.env })
  const sleep = sleepMiddleware(getEnv)
  const install = (server) => {
    // The renderer loads this same server over loopback.
    const getOrigin = () => `http://127.0.0.1:${server.httpServer.address().port}`
    server.middlewares.use(sleep)
    server.middlewares.use(departuresMiddleware(getOrigin))
    server.httpServer?.on('close', closeBrowser)
  }
  return {
    name: 'sleep-endpoint',
    configureServer(server) {
      install(server)
    },
    configurePreviewServer(server) {
      install(server)
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), sleepEndpoint(mode)],
  // Listen on the LAN so the Inkplate can reach it; npm swallows a bare `--host`.
  server: { host: true, port: 8000 },
  preview: { host: true, port: 8000 },
}))
