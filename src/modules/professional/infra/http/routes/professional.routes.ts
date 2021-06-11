import { Router } from 'express';

import ProfessionalController from '../controllers/ProfessionalController';

const professionalRouter = Router();

const professionalController = new ProfessionalController();

professionalRouter.post('/professional', professionalController.create);

professionalRouter.get('/professionals', professionalController.findAll);

professionalRouter.get('/professional/:id', professionalController.findOne);

professionalRouter.put('/professional', professionalController.update);

professionalRouter.delete('/professional/:id', professionalController.delete);

export default professionalRouter;
