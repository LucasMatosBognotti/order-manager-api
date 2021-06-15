import { Router } from 'express';

import PaymentController from '../controllers/PaymentController';

const paymentRouter = Router();

const paymentController = new PaymentController();

paymentRouter.post('/payment', paymentController.create);

paymentRouter.get('/payments', paymentController.findAll);

paymentRouter.get('/payment/:id', paymentController.findOne);

paymentRouter.put('/payment', paymentController.update);

paymentRouter.delete('/payment/:id', paymentController.delete);

export default paymentRouter;
