import Order from '../infra/typeorm/entity/Order';

import ICreateOrderDTO from '../dtos/ICreateOrderDTO';

export default interface IOrderRepository {
  create(dataOrder: ICreateOrderDTO): Promise<Order>;
  findAll(): Promise<Order[] | undefined>;
  findById(id: string): Promise<Order | undefined>;
  save(service: Order): Promise<Order>;
  delete(id: string): Promise<void>;
}
