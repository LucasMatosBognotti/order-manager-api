import Item from '../infra/typeorm/entity/Item';

import AppError from '../../../shared/error/AppError';

import IItemRepository from '../repository/IItemRepository';
import IUpdateItemDTO from '../dtos/IUpdateItemDTO';

class UpdateItemServices {
  private itemRepository: IItemRepository;

  constructor(itemRepository: IItemRepository) {
    this.itemRepository = itemRepository;
  }

  public async execute({
    id,
    quantity,
    addition,
    discount,
    order_id,
    service_id,
    professional_id,
  }: IUpdateItemDTO): Promise<Item> {
    const item = await this.itemRepository.findById(id);

    if (!item) {
      throw new AppError('Item does not exist', 404);
    }

    item.quantity = quantity;
    item.addition = addition;
    item.discount = discount;
    item.order_id = order_id;
    item.service_id = service_id;
    item.professional_id = professional_id;

    await this.itemRepository.save(item);

    return item;
  }
}

export default UpdateItemServices;
