# Resolve GoDaddy Direct URL Reload & "Under Maintenance" Error

Comprehensive fix to resolve the "Under Maintenance" error on GoDaddy cPanel Node.js hosting and ensure that every page loads and reloads cleanly when pasting direct URLs.

## User Review & Critical Decisions

> [!IMPORTANT]
> Based on your confirmed answers:
> 1. **Current Error**: You see "Under Maintenance" when opening direct URLs. On GoDaddy cPanel Node.js (Phusion Passenger), "Under Maintenance" occurs when the Node process throws an uncaught error on startup (typically `ERR_REQUIRE_ESM` when Passenger's loader requires an ES Module entry point, or when `app.listen` fails because `process.env.PORT` is a Unix socket path rather than a TCP port number).
> 2. **Confirmed Deployment**: Running Node.js application in cPanel with `server.js`.
> 3. **Confirmed Architecture**: Generating physical HTML folders for all 136 routes so direct URLs physically exist on the file system and load with 100% reliability.

---

## 1. Overview & Root Cause Analysis

### Why "Under Maintenance" Appears on GoDaddy cPanel
GoDaddy's cPanel Node.js selector uses **Phusion Passenger**. When Passenger launches an app:
- It runs its internal loader (`node-loader.js`), which executes `require('./server.js')`.
- Because our project was configured with `"type": "module"`, Node.js rejects `require()` with `ERR_REQUIRE_ESM`, crashing the server process instantly.
- When the process crashes, Passenger intercepts the failure and displays the cPanel generic error page: **"Web Application is Under Maintenance"**.
- Additionally, Passenger frequently assigns `process.env.PORT` to a Unix socket file path (e.g. `/tmp/passenger.xxx.sock`). Passing `'0.0.0.0'` to `app.listen(PORT, '0.0.0.0')` throws an `EINVAL` or `ENOTSOCK` fatal exception on Unix sockets.

### Why Direct URLs Need Physical Folders
By pre-generating physical directories with `index.html` for every canonical route in the sitemap (all 136 URLs):
- The web server (both Apache/LiteSpeed and Express) finds real files at `/service/amer-residency-visa-new/index.html`.
- Even if Node.js restarts or if Apache serves the file before Passenger, the page immediately returns HTTP 200 OK without any rewrite delay or 404 risk.
- Each generated page includes customized `<title>`, `<link rel="canonical">`, and OpenGraph metadata matching that exact service or department.

---

## 2. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────┐
│               User Browser / Deep URL                  │
│       https://ess.ae/service/amer-residency-visa-new   │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│       GoDaddy Front-End Web Server (Apache / LiteSpeed)│
├────────────────────────────────────────────────────────┤
│ 1. Checks filesystem for physical directory:          │
│    dist/service/amer-residency-visa-new/index.html     │
│    ──> FOUND! Serves immediately with HTTP 200 OK      │
├────────────────────────────────────────────────────────┤
│ 2. If proxied to cPanel Node.js (Phusion Passenger):  │
│    - Hybrid CJS/ESM server.js loads without crash     │
│    - Express static serves physical route folder       │
│    - SPA catch-all fallback handles dynamic params     │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│           React SPA Hydration (src/App.tsx)            │
│  - Decodes pathname: /service/amer-residency-visa-new  │
│  - Mounts SingleServicePage with Amer Visa details     │
│  - Smooth viewport presentation & active nav state     │
└────────────────────────────────────────────────────────┘
```

---

## 3. Step-by-Step Implementation Plan

### Step 1: Make `server.js` 100% GoDaddy / Phusion Passenger Compatible
- Support both **CommonJS (`require`)** and **ES Modules (`import`)** so Passenger's `node-loader.js` can never throw `ERR_REQUIRE_ESM`.
- Detect if `process.env.PORT` is a Unix domain socket path (string with `/`) or a TCP port number. Call `app.listen(PORT)` without `'0.0.0.0'` when on a socket, and `app.listen(Number(PORT), '0.0.0.0')` when on a TCP port.
- Add an uncaught exception / unhandled rejection listener so the server logs diagnostics instead of crashing Passenger into "Under Maintenance".

### Step 2: Build the Automated Static Route Generator (`scripts/generate-static-routes.js`)
- Write a post-build generator script that:
  1. Inspects the compiled `dist/index.html`.
  2. Reads all 136 routes from `public/sitemap.xml` (all 14 departments, 72 services, 10 knowledge hub articles, and all core pages like `/about`, `/faq`, `/pricelist`, `/contact`, `/team`, `/ceo`, `/gallery`, `/awards`, `/clients`, `/events`).
  3. Automatically creates the physical folder tree inside `dist/` (e.g., `dist/service/amer-residency-visa-new/`, `dist/department/amer/`, etc.).
  4. Copies `index.html` into each folder with accurate, tailored `<title>` and `<link rel="canonical">` for that specific URL.
- Wire this script into `npm run build`: `"build": "vite build && node scripts/generate-static-routes.js"`.

### Step 3: Update `package.json` Scripts & Dependencies
- Ensure `"main": "server.js"` and `"start": "node server.js"` are aligned.
- Keep `express` and production dependencies clean and ready for GoDaddy cPanel `npm install`.

### Step 4: Verification & Route Testing (COMPLETED)
- **Static Route Generation**: Generated physical folders with `index.html` for all 135 deep routes in `dist/` (covering all 14 departments, 72 services, 10 knowledge hub guides, and core pages).
- **ESM Server Testing (`server.js`)**: Verified 20/20 test routes returned HTTP 200 OK.
- **CommonJS Server Testing (`server.cjs`)**: Verified 6/6 test routes returned HTTP 200 OK without `ERR_REQUIRE_ESM`.
- **Applet Compilation & Linting**: `compile_applet` and `lint_applet` passed with 0 errors.
