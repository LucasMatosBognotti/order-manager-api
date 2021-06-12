import Order from '../infra/typeorm/entity/Order';

import ICreateOrderDTO from '../dtos/ICreateOrderDTO';
import IOrderRepository from '../repository/IOrderRepository';

class CreateOrderServices {
  private orderRepository: IOrderRepository;

  constructor(orderRepository: IOrderRepository) {
    this.orderRepository = orderRepository;
  }

  public async execute({ customer_name }: ICreateOrderDTO): Promise<Order> {
    const order = await this.orderRepository.create({
      customer_name,
    });

    return order;
  }
}

export default CreateOrderServices;
