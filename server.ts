import fs from 'node:fs/promises';
import express from 'express';
import { ViteDevServer } from 'vite';

// Constants
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

// Create http server
const app = express();

// Add Vite or respective production middlewares
let vite: ViteDevServer;
if (!isProduction) {
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import('compression')).default;
  const sirv = (await import('sirv')).default;
  app.use(compression());
  app.use(base, sirv('./dist/client', { extensions: [] }));
}

// Serve HTML
app.use('*', async (req, res, next) => {
  const url = req.originalUrl;
  try {
    let template = await fs.readFile('./index.html', 'utf-8');
    template = await vite.transformIndexHtml(url, template);
    const html = template.split(`<!--app-html-->`);
    res.write(html[0]);
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
    const { pipe } = await render(url, {
      onShellReady() {
        pipe(res);
      },
      onAllReady() {
        res.write(html[1]);
        res.end();
      },
    });
  } catch (e) {
    vite.ssrFixStacktrace(e);
    next(e);
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
