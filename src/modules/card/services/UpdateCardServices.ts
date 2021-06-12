import Card from '../infra/typeorm/entity/Card';

import AppError from '../../../shared/error/AppError';

import ICardRepository from '../repository/ICardRepository';
import IUpdateCardDTO from '../dtos/IUpdateCardDTO';

class UpdateCardServices {
  private cardRepository: ICardRepository;

  constructor(cardRepository: ICardRepository) {
    this.cardRepository = cardRepository;
  }

  public async execute({
    id,
    name,
    type,
    fee,
    admin_id,
  }: IUpdateCardDTO): Promise<Card> {
    const card = await this.cardRepository.findById(id);

    if (!card) {
      throw new AppError('Card does not exist', 404);
    }

    card.name = name;
    card.type = type;
    card.fee = fee;
    card.admin_id = admin_id;

    await this.cardRepository.save(card);

    return card;
  }
}

export default UpdateCardServices;
