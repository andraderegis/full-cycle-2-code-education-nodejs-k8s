import { ROUTES } from './constants.mjs';
import { hello, healthz, secret } from './services.mjs';

const routes = new Map([
  [ROUTES.HELLO, hello],
  [ROUTES.SECRET, secret],
  [ROUTES.HEALTHZ, healthz]
]);

export { routes };
