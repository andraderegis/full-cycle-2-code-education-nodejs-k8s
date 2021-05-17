import http from 'http';

import { SERVER_PORT } from './constants.mjs';
import { routes } from './routes.mjs';

const server = http.createServer(async (req, res) => {
  try {
    const route = routes.get(req.url);

    if (!route) {
      res.statusCode = 500;
      res.end(JSON.stringify({
        error: `Unknown route ${req.url}`
      }));

      return;
    }

    const result = await route();

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(result));
  } catch (err) {
    res.statusCode = 500;
    res.end(JSON.stringify({
      error: err.message
    }));
  }
});

server.listen(SERVER_PORT, () => {
  console.log(`Server running at ${SERVER_PORT} port`);
});