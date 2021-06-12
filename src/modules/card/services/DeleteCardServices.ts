import AppError from '../../../shared/error/AppError';
import Message from '../../../shared/error/Message';

import ICardRepository from '../repository/ICardRepository';

class DeleteCardServices {
  private cardRepository: ICardRepository;

  constructor(cardRepository: ICardRepository) {
    this.cardRepository = cardRepository;
  }

  public async execute(id: string): Promise<Message> {
    const card = await this.cardRepository.findById(id);

    if (!card) {
      throw new AppError('Card does not exist', 404);
    }

    await this.cardRepository.delete(card.id);

    return {
      message: 'Card deleted successfully',
    };
  }
}

export default DeleteCardServices;
