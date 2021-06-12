import { getRepository, Repository } from 'typeorm';

import Item from '../entity/Item';

import ICreateItemDTO from '../../../dtos/ICreateItemDTO';
import IItemRepository from '../../../repository/IItemRepository';

class ItemRepository implements IItemRepository {
  private ormRepository: Repository<Item>;

  constructor() {
    this.ormRepository = getRepository(Item);
  }

  public async create(dataItem: ICreateItemDTO): Promise<Item> {
    const item = this.ormRepository.create(dataItem);

    await this.ormRepository.save(item);

    return item;
  }

  public async findAll(): Promise<Item[] | undefined> {
    const items = await this.ormRepository.find();

    return items;
  }

  public async findById(id: string): Promise<Item | undefined> {
    const item = await this.ormRepository.findOne({ where: { id } });

    return item;
  }

  public async save(Item: Item): Promise<Item> {
    const itemSave = await this.ormRepository.save(Item);

    return itemSave;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default ItemRepository;
