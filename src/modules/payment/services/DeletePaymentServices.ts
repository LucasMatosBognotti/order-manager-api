import AppError from '../../../shared/error/AppError';
import Message from '../../../shared/error/Message';

import IPaymentRepository from '../repository/IPaymentRepository';

class DeletePaymentServices {
  private paymentRepository: IPaymentRepository;

  constructor(paymentRepository: IPaymentRepository) {
    this.paymentRepository = paymentRepository;
  }

  public async execute(id: string): Promise<Message> {
    const payment = await this.paymentRepository.findById(id);

    if (!payment) {
      throw new AppError('Payment does not exist', 404);
    }

    await this.paymentRepository.delete(payment.id);

    return {
      message: 'Payment deleted successfully',
    };
  }
}

export default DeletePaymentServices;
