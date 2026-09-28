import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// In development, serve via Vite middleware
if (process.env.NODE_ENV !== 'production') {
  console.log('Running in development mode...');
  (async () => {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  })();
} else {
  // In production, serve static files
  const distPath = path.join(process.cwd(), 'dist');
  console.log('Running in production mode. Serving from:', distPath);
  
  if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    app.get('*', (req, res) => {
      res.status(404).send('Build folder (dist) not found. Please run npm run build.');
    });
  }
}

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
