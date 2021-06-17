import { Router } from 'express';
import ensureAuthenticate from '../../../../../shared/infra/http/middleware/ensureAuthenticate';

import AdministratorController from '../controllers/AdministratorController';

const administratorRouter = Router();

const administratorController = new AdministratorController();

administratorRouter.post('/admin', administratorController.create);

administratorRouter.get(
  '/admin',
  ensureAuthenticate,
  administratorController.findOne,
);

export default administratorRouter;
