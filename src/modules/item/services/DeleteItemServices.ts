import AppError from '../../../shared/error/AppError';
import Message from '../../../shared/error/Message';

import IItemRepository from '../repository/IItemRepository';

class DeleteItemServices {
  private itemRepository: IItemRepository;

  constructor(itemRepository: IItemRepository) {
    this.itemRepository = itemRepository;
  }

  public async execute(id: string): Promise<Message> {
    const item = await this.itemRepository.findById(id);

    if (!item) {
      throw new AppError('Item does not exist', 404);
    }

    await this.itemRepository.delete(item.id);

    return {
      message: 'Item deleted successfully',
    };
  }
}

export default DeleteItemServices;
