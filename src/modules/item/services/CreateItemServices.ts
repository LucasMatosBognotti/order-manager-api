import Item from '../infra/typeorm/entity/Item';

import ICreateItemDTO from '../dtos/ICreateItemDTO';
import IItemRepository from '../repository/IItemRepository';

class CreateItemServices {
  private ItemRepository: IItemRepository;

  constructor(ItemRepository: IItemRepository) {
    this.ItemRepository = ItemRepository;
  }

  public async execute({
    quantity,
    addition,
    discount,
    order_id,
    service_id,
    professional_id,
  }: ICreateItemDTO): Promise<Item> {
    const item = await this.ItemRepository.create({
      quantity,
      addition,
      discount,
      order_id,
      service_id,
      professional_id,
    });

    return item;
  }
}

export default CreateItemServices;
