import Item from '../infra/typeorm/entity/Item';

import ICreateItemDTO from '../dtos/ICreateItemDTO';

export default interface IItemRepository {
  create(dataItem: ICreateItemDTO): Promise<Item>;
  findAll(): Promise<Item[] | undefined>;
  findById(id: string): Promise<Item | undefined>;
  save(service: Item): Promise<Item>;
  delete(id: string): Promise<void>;
}
