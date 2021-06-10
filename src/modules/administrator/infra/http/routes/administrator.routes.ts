import { Router } from 'express';

import ensureAuthenticate from '../middleware/ensureAuthenticate';

import FindOneAdministratorController from '../controllers/AdministratorController';

const administratorRouter = Router();

const findOneAdministrator = new FindOneAdministratorController();

administratorRouter.use(ensureAuthenticate);

administratorRouter.get('/admin', findOneAdministrator.findOne);

export default administratorRouter;
