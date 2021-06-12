import Item from '../infra/typeorm/entity/Item';

import AppError from '../../../shared/error/AppError';

import IItemRepository from '../repository/IItemRepository';

class FindOneItemServices {
  private itemRepository: IItemRepository;

  constructor(itemRepository: IItemRepository) {
    this.itemRepository = itemRepository;
  }

  public async execute(id: string): Promise<Item> {
    const Item = await this.itemRepository.findById(id);

    if (!Item) {
      throw new AppError('Item does not exist', 404);
    }

    return Item;
  }
}

export default FindOneItemServices;
