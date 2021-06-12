import Card from '../infra/typeorm/entity/Card';

import ICreateCardDTO from '../dtos/ICreateCardDTO';
import ICardRepository from '../repository/ICardRepository';

class CreateCardServices {
  private cardRepository: ICardRepository;

  constructor(cardRepository: ICardRepository) {
    this.cardRepository = cardRepository;
  }

  public async execute({
    name,
    type,
    fee,
    admin_id,
  }: ICreateCardDTO): Promise<Card> {
    const card = await this.cardRepository.create({
      name,
      type,
      fee,
      admin_id,
    });

    return card;
  }
}

export default CreateCardServices;
