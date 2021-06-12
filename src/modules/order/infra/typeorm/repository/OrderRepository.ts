import { getRepository, Repository } from 'typeorm';

import Order from '../entity/Order';

import ICreateOrderDTO from '../../../dtos/ICreateOrderDTO';
import IOrderRepository from '../../../repository/IOrderRepository';

class OrderRepository implements IOrderRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  public async create(dataOrder: ICreateOrderDTO): Promise<Order> {
    const order = this.ormRepository.create(dataOrder);

    await this.ormRepository.save(order);

    return order;
  }

  public async findAll(): Promise<Order[] | undefined> {
    const orders = await this.ormRepository.find();

    return orders;
  }

  public async findById(id: string): Promise<Order | undefined> {
    const order = await this.ormRepository.findOne({ where: { id } });

    return order;
  }

  public async save(order: Order): Promise<Order> {
    const orderSave = await this.ormRepository.save(order);

    return orderSave;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default OrderRepository;
