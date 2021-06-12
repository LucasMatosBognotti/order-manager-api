import { Request, Response } from 'express';

import CardRepository from '../../typeorm/repository/CardRepository';

import CreateCardServices from '../../../services/CreateCardServices';
import FindAllCardServices from '../../../services/FindAllCardServices';
import FindOneCardServices from '../../../services/FindOneCardServices';
import UpdateCardServices from '../../../services/UpdateCardServices';
import DeleteCardServices from '../../../services/DeleteCardServices';

class CardController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, type, fee, admin_id } = req.body;

    const cardRepository = new CardRepository();

    const createCard = new CreateCardServices(cardRepository);

    const card = await createCard.execute({
      name,
      type,
      fee,
      admin_id,
    });

    return res.json(card);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const cardRepository = new CardRepository();

    const findAllCard = new FindAllCardServices(cardRepository);

    const cards = await findAllCard.execute();

    return res.json(cards);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const cardRepository = new CardRepository();

    const findOneCard = new FindOneCardServices(cardRepository);

    const card = await findOneCard.execute(id);

    return res.json(card);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, name, type, fee, admin_id } = req.body;

    const cardRepository = new CardRepository();

    const updateCard = new UpdateCardServices(cardRepository);

    const card = await updateCard.execute({
      id,
      name,
      type,
      fee,
      admin_id,
    });

    return res.json(card);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const cardRepository = new CardRepository();

    const deleteCard = new DeleteCardServices(cardRepository);

    const card = await deleteCard.execute(id);

    return res.json(card);
  }
}

export default CardController;
