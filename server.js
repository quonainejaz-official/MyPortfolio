import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';
import express from 'express';

const isProd = process.env.NODE_ENV === 'production';
const port = process.env.PORT ? Number(process.env.PORT) : 4173;

const rootDir = process.cwd();

async function createServer() {
  const app = express();

  let vite;
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    vite = await createViteServer({
      root: rootDir,
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    app.use(
      express.static(path.resolve(rootDir, 'dist/client'), {
        index: false,
      })
    );
  }

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;

      let template;
      let render;

      if (!isProd) {
        template = await fs.readFile(path.resolve(rootDir, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        ({ render } = await vite.ssrLoadModule('/entry-server.jsx'));
      } else {
        template = await fs.readFile(
          path.resolve(rootDir, 'dist/client/index.html'),
          'utf-8'
        );
        const entryUrl = pathToFileURL(
          path.resolve(rootDir, 'dist/server/entry-server.js')
        ).href;
        ({ render } = await import(entryUrl));
      }

      const appHtml = await render(url);
      const html = template.includes('<!--app-html-->')
        ? template.replace('<!--app-html-->', appHtml)
        : template.replace(
            /<div id="root">[\s\S]*?<\/div>/,
            () => `<div id="root">${appHtml}</div>`
          );

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (!isProd && vite) {
        vite.ssrFixStacktrace(e);
      }
      res.status(500).end(e instanceof Error ? e.stack : String(e));
    }
  });

  return app;
}

createServer().then((app) => {
  app.listen(port, '0.0.0.0', () => {
    console.log(`SSR server running at http://localhost:${port}`);
  });
});
