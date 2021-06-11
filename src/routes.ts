import { Router } from 'express';

import ensureAuthenticate from './shared/infra/http/middleware/ensureAuthenticate';

import sessionRouter from './modules/administrator/infra/http/routes/session.routes';
import administratorRouter from './modules/administrator/infra/http/routes/administrator.routes';
import professionalRouter from './modules/professional/infra/http/routes/professional.routes';

const routes = Router();

routes.use('/', sessionRouter);

/* Middleware */

routes.use(ensureAuthenticate);

routes.use('/', administratorRouter);
routes.use('/', professionalRouter);

export default routes;
