import { Router } from 'express';

import OrderController from '../controllers/OrderController';

const orderRouter = Router();

const orderController = new OrderController();

orderRouter.post('/order', orderController.create);

orderRouter.get('/orders', orderController.findAll);

orderRouter.get('/order/:id', orderController.findOne);

orderRouter.put('/order', orderController.update);

orderRouter.delete('/order/:id', orderController.delete);

export default orderRouter;
