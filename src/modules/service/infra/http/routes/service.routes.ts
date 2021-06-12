import { Router } from 'express';

import ServiceController from '../controllers/ServiceController';

const serviceRouter = Router();

const serviceController = new ServiceController();

serviceRouter.post('/service', serviceController.create);

serviceRouter.get('/services', serviceController.findAll);

serviceRouter.get('/service/:id', serviceController.findOne);

serviceRouter.put('/service', serviceController.update);

serviceRouter.delete('/service/:id', serviceController.delete);

export default serviceRouter;
