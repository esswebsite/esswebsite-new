const express = require('express');
const path = require('path');
const fs = require('fs');

// Prevent unhandled crashes from taking down Phusion Passenger into "Under Maintenance"
process.on('uncaughtException', (err) => {
  console.error('[ESS Server CJS] Uncaught Exception:', err);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('[ESS Server CJS] Unhandled Rejection at:', promise, 'reason:', reason);
});

const app = express();

const PORT = process.env.PORT || 3000;
const isSocket = typeof PORT === 'string' && (PORT.includes('/') || PORT.includes('\\') || isNaN(Number(PORT)));

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

// Dedicated XML & Robots Routes
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

const primaryDist = possibleDistDirs.find((d) => fs.existsSync(d) && fs.existsSync(path.join(d, 'index.html'))) || possibleDistDirs[0];

app.use(
  express.static(primaryDist, {
    maxAge: '1y',
    immutable: true,
    index: 'index.html',
    setHeaders: (res, pathHeader) => {
      if (pathHeader.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      }
    },
  })
);

app.get('*', (req, res) => {
  const cleanReqPath = req.path.replace(/^\/+/, '').replace(/\/+$/, '');
  
  if (cleanReqPath) {
    const routeIndex = findFile(path.join(cleanReqPath, 'index.html'));
    if (routeIndex) {
      res.setHeader('Content-Type', 'text/html; charset=UTF-8');
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      return res.sendFile(routeIndex);
    }
  }

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

if (isSocket) {
  app.listen(PORT, () => {
    console.log(`[ESS Server CJS] Phusion Passenger socket listening at: ${PORT}`);
    console.log(`[ESS Server CJS] Serving static files from: ${primaryDist}`);
  });
} else {
  const numPort = Number(PORT);
  app.listen(numPort, '0.0.0.0', () => {
    console.log(`[ESS Server CJS] Running on http://0.0.0.0:${numPort}`);
    console.log(`[ESS Server CJS] Serving static files from: ${primaryDist}`);
  });
}
