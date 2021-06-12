import Card from '../infra/typeorm/entity/Card';

import AppError from '../../../shared/error/AppError';

import ICardRepository from '../repository/ICardRepository';

class FindAllCardService {
  private cardRepository: ICardRepository;

  constructor(cardRepository: ICardRepository) {
    this.cardRepository = cardRepository;
  }

  public async execute(): Promise<Card[]> {
    const cards = await this.cardRepository.findAll();

    if (!cards?.length) {
      throw new AppError('Cards does not exist', 404);
    }

    return cards;
  }
}

export default FindAllCardService;
