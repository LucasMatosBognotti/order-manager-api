import Order from '../infra/typeorm/entity/Order';

import AppError from '../../../shared/error/AppError';

import IOrderRepository from '../repository/IOrderRepository';
import IUpdateOrderDTO from '../dtos/IUpdateOrderDTO';

class UpdateOrderServices {
  private orderRepository: IOrderRepository;

  constructor(orderRepository: IOrderRepository) {
    this.orderRepository = orderRepository;
  }

  public async execute({ id, customer_name }: IUpdateOrderDTO): Promise<Order> {
    const order = await this.orderRepository.findById(id);

    if (!order) {
      throw new AppError('Order does not exist', 404);
    }

    order.customer_name = customer_name;

    await this.orderRepository.save(order);

    return order;
  }
}

export default UpdateOrderServices;
