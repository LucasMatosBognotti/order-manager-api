import AppError from '../../../shared/error/AppError';
import Message from '../../../shared/error/Message';

import IOrderRepository from '../repository/IOrderRepository';

class DeleteOrderServices {
  private orderRepository: IOrderRepository;

  constructor(orderRepository: IOrderRepository) {
    this.orderRepository = orderRepository;
  }

  public async execute(id: string): Promise<Message> {
    const order = await this.orderRepository.findById(id);

    if (!order) {
      throw new AppError('Order does not exist', 404);
    }

    await this.orderRepository.delete(order.id);

    return {
      message: 'Order deleted successfully',
    };
  }
}

export default DeleteOrderServices;
