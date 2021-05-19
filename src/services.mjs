import { STARTUP_SERVER } from './constants.mjs';

const hello = async () => {
  let message = 'nodejs_k8s';

  if (process.env.NAME && process.env.AGE) {
    message = message.concat(`- I'm ${process.env.NAME}. I'm ${process.env.AGE} years old.`);
  }

  return { message }
}

const healthz = async () => {
  const duration = new Date(Date.now() - STARTUP_SERVER.getTime());

  if (duration.getSeconds() < 10) {
    throw new Error(`Application does not ready at ${duration.getSeconds()} seconds`);
  }

  // if (duration.getSeconds() > 30) {
  //   throw new Error(`Duration ${duration.getSeconds()} exceeded 30 seconds`);
  // }

  // if (duration.getSeconds() > 25) {
  //   throw new Error(`Duration ${duration.getSeconds()} exceeded 25 seconds`);
  // }

  return {
    status: 'ok'
  }
}

const secret = async () => {
  let user = {};

  if (process.env.USER && process.env.EMAIL) {
    user = {
      username: process.env.USER,
      email: process.env.EMAIL
    }
  }

  return { user };
}

export { hello, healthz, secret };
