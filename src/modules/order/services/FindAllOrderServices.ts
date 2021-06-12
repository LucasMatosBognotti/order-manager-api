import Order from '../infra/typeorm/entity/Order';

import AppError from '../../../shared/error/AppError';

import IOrderRepository from '../repository/IOrderRepository';

class FindAllOrderService {
  private orderRepository: IOrderRepository;

  constructor(orderRepository: IOrderRepository) {
    this.orderRepository = orderRepository;
  }

  public async execute(): Promise<Order[]> {
    const orders = await this.orderRepository.findAll();

    if (!orders?.length) {
      throw new AppError('Orders does not exist', 404);
    }

    return orders;
  }
}

export default FindAllOrderService;
