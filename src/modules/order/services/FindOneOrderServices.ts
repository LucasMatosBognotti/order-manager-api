import Order from '../infra/typeorm/entity/Order';

import AppError from '../../../shared/error/AppError';

import IOrderRepository from '../repository/IOrderRepository';

class FindOneOrderServices {
  private orderRepository: IOrderRepository;

  constructor(orderRepository: IOrderRepository) {
    this.orderRepository = orderRepository;
  }

  public async execute(id: string): Promise<Order> {
    const order = await this.orderRepository.findById(id);

    if (!order) {
      throw new AppError('Order does not exist', 404);
    }

    return order;
  }
}

export default FindOneOrderServices;
