import { Router } from 'express';
import AuthenticateAdministratorController from '../controllers/AuthenticateAdministratorController';

const sessionRouter = Router();

const sessionController = new AuthenticateAdministratorController();

sessionRouter.post('/session', sessionController.session);

export default sessionRouter;
