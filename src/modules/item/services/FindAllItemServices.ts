import Item from '../infra/typeorm/entity/Item';

import AppError from '../../../shared/error/AppError';

import IItemRepository from '../repository/IItemRepository';

class FindAllItemService {
  private itemRepository: IItemRepository;

  constructor(itemRepository: IItemRepository) {
    this.itemRepository = itemRepository;
  }

  public async execute(): Promise<Item[]> {
    const items = await this.itemRepository.findAll();

    if (!items?.length) {
      throw new AppError('Itens does not exist', 404);
    }

    return items;
  }
}

export default FindAllItemService;
