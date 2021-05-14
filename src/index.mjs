import http from 'http';

const SERVER_PORT = 4000;

const server = http.createServer((_, res) => {
  let message = 'nodejs_k8s';

  if (process.env.NAME && process.env.AGE) {
    message = message.concat(`- I'm ${process.env.NAME}. I'm ${process.env.AGE} years old.`);
  }

  res.setHeader('Content-Type', 'application/json');

  res.statusCode = 200;

  res.end(JSON.stringify({
    message,
    alive: true
  }));
});

server.listen(SERVER_PORT, () => {
  console.log(`Server running at ${SERVER_PORT} port`);
});