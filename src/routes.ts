import { Router } from 'express';

import ensureAuthenticate from './shared/infra/http/middleware/ensureAuthenticate';

import sessionRouter from './modules/administrator/infra/http/routes/session.routes';
import administratorRouter from './modules/administrator/infra/http/routes/administrator.routes';
import professionalRouter from './modules/professional/infra/http/routes/professional.routes';
import serviceRouter from './modules/service/infra/http/routes/service.routes';
import orderRouter from './modules/order/infra/http/routes/order.routes';
import itemRouter from './modules/item/infra/http/routes/item.routes';
import cardRouter from './modules/card/infra/http/routes/card.routes';
import paymentRouter from './modules/payment/infra/http/routes/payment.routes';

const routes = Router();

routes.use('/', sessionRouter);
routes.use('/', administratorRouter);

/* Middleware */

routes.use(ensureAuthenticate);

routes.use('/', professionalRouter);
routes.use('/', serviceRouter);
routes.use('/', orderRouter);
routes.use('/', itemRouter);
routes.use('/', cardRouter);
routes.use('/', paymentRouter);

export default routes;
