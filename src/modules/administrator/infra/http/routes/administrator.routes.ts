import { Router } from 'express';

import AdministratorController from '../controllers/AdministratorController';

const administratorRouter = Router();

const administratorController = new AdministratorController();

administratorRouter.post('/admin', administratorController.create);

administratorRouter.get('/admin', administratorController.findOne);

export default administratorRouter;
