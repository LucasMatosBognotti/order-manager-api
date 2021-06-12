import { Router } from 'express';

import CardController from '../controllers/CardController';

const cardRouter = Router();

const cardController = new CardController();

cardRouter.post('/card', cardController.create);

cardRouter.get('/cards', cardController.findAll);

cardRouter.get('/card/:id', cardController.findOne);

cardRouter.put('/card', cardController.update);

cardRouter.delete('/card/:id', cardController.delete);

export default cardRouter;
