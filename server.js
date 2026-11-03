import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Prevent unhandled crashes from taking down Phusion Passenger into "Under Maintenance"
process.on('uncaughtException', (err) => {
  console.error('[ESS Server] Uncaught Exception:', err);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('[ESS Server] Unhandled Rejection at:', promise, 'reason:', reason);
});

const app = express();

// GoDaddy / Phusion Passenger can provide PORT as:
// 1. A standard TCP port number (e.g. 3000, 8080)
// 2. A Unix domain socket string (e.g. /tmp/passenger.xxx.sock or \\.\pipe\...)
const PORT = process.env.PORT || 3000;
const isSocket = typeof PORT === 'string' && (PORT.includes('/') || PORT.includes('\\') || isNaN(Number(PORT)));

// Resolve distribution and asset directories
const possibleDistDirs = [
  path.resolve(__dirname, 'dist'),
  path.resolve(__dirname),
  path.resolve(process.cwd(), 'dist'),
  path.resolve(process.cwd()),
];

const findFile = (relativeFilePath) => {
  for (const baseDir of possibleDistDirs) {
    const candidate = path.join(baseDir, relativeFilePath);
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
  }
  return null;
};

// 1. Dedicated XML & Robots Routes
app.get('/sitemap.xml', (req, res) => {
  const filePath = findFile('sitemap.xml');
  if (filePath) {
    res.type('application/xml').sendFile(filePath);
  } else {
    res.status(404).send('sitemap.xml not found');
  }
});

app.get('/robots.txt', (req, res) => {
  const filePath = findFile('robots.txt');
  if (filePath) {
    res.type('text/plain').sendFile(filePath);
  } else {
    res.status(404).send('robots.txt not found');
  }
});

app.get('/sitemap.xsl', (req, res) => {
  const filePath = findFile('sitemap.xsl');
  if (filePath) {
    res.type('application/xml').sendFile(filePath);
  } else {
    res.status(404).send('sitemap.xsl not found');
  }
});

// 2. Serve static assets from 'dist' if it exists, or from root
const primaryDist = possibleDistDirs.find((d) => fs.existsSync(d) && fs.existsSync(path.join(d, 'index.html'))) || possibleDistDirs[0];

app.use(
  express.static(primaryDist, {
    maxAge: '1y',
    immutable: true,
    index: 'index.html', // Automatically serve physical index.html for pre-generated route folders!
    setHeaders: (res, pathHeader) => {
      if (pathHeader.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      }
    },
  })
);

// 3. Fallback: Check if a physical sub-route folder with index.html exists, or serve root index.html
app.get('*', (req, res) => {
  const cleanReqPath = req.path.replace(/^\/+/, '').replace(/\/+$/, '');
  
  // Try to find physical route index.html (e.g. dist/service/amer-residency-visa-new/index.html)
  if (cleanReqPath) {
    const routeIndex = findFile(path.join(cleanReqPath, 'index.html'));
    if (routeIndex) {
      res.setHeader('Content-Type', 'text/html; charset=UTF-8');
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      return res.sendFile(routeIndex);
    }
  }

  // Fallback to primary root index.html
  const rootIndex = findFile('index.html');
  if (rootIndex) {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    return res.sendFile(rootIndex);
  }

  res.status(503).send(
    'Production build not found. Please run "npm run build" before starting the server.'
  );
});

// Start listening safely whether on Unix socket or TCP port
if (isSocket) {
  app.listen(PORT, () => {
    console.log(`[ESS Server] Phusion Passenger socket listening at: ${PORT}`);
    console.log(`[ESS Server] Serving static files from: ${primaryDist}`);
  });
} else {
  const numPort = Number(PORT);
  app.listen(numPort, '0.0.0.0', () => {
    console.log(`[ESS Server] Running on http://0.0.0.0:${numPort}`);
    console.log(`[ESS Server] Serving static files from: ${primaryDist}`);
  });
}
