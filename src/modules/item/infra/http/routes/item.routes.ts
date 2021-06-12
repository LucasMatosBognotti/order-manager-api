import { Router } from 'express';

import ItemController from '../controllers/ItemController';

const itemRouter = Router();

const itemController = new ItemController();

itemRouter.post('/item', itemController.create);

itemRouter.get('/itens', itemController.findAll);

itemRouter.get('/item/:id', itemController.findOne);

itemRouter.put('/item', itemController.update);

itemRouter.delete('/item/:id', itemController.delete);

export default itemRouter;
