import Card from '../infra/typeorm/entity/Card';

import AppError from '../../../shared/error/AppError';

import ICardRepository from '../repository/ICardRepository';

class FindOneCardServices {
  private cardRepository: ICardRepository;

  constructor(cardRepository: ICardRepository) {
    this.cardRepository = cardRepository;
  }

  public async execute(id: string): Promise<Card> {
    const card = await this.cardRepository.findById(id);

    if (!card) {
      throw new AppError('Card does not exist', 404);
    }

    return card;
  }
}

export default FindOneCardServices;
