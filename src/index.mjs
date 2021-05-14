import http from 'http';

const SERVER_PORT = 4000;

const server = http.createServer((_, res) => {
  res.setHeader('Content-Type', 'application/json');

  res.statusCode = 200;

  res.end(JSON.stringify({
    message: 'nodejs_k8s',
    alive: true
  }));
});

server.listen(SERVER_PORT, () => {
  console.log(`Server running at ${SERVER_PORT} port`);
});