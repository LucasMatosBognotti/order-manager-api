import { Router } from 'express';

import sessionRouter from './modules/administrator/infra/http/routes/session.routes';
import administratorRouter from './modules/administrator/infra/http/routes/administrator.routes';

const routes = Router();

routes.use('/', sessionRouter);
routes.use('/', administratorRouter);

export default routes;
