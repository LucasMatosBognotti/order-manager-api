import { Router } from 'express';

import ensureAuthenticate from './shared/infra/http/middleware/ensureAuthenticate';

import sessionRouter from './modules/administrator/infra/http/routes/session.routes';
import administratorRouter from './modules/administrator/infra/http/routes/administrator.routes';
import professionalRouter from './modules/professional/infra/http/routes/professional.routes';
import serviceRouter from './modules/service/infra/http/routes/service.routes';
import orderRouter from './modules/order/infra/http/routes/order.routes';

const routes = Router();

routes.use('/', sessionRouter);

/* Middleware */

routes.use(ensureAuthenticate);

routes.use('/', administratorRouter);
routes.use('/', professionalRouter);
routes.use('/', serviceRouter);
routes.use('/', orderRouter);

export default routes;
