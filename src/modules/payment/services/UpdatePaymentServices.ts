import Payment from '../infra/typeorm/entity/Payment';

import AppError from '../../../shared/error/AppError';

import IPaymentRepository from '../repository/IPaymentRepository';
import IUpdatePaymentDTO from '../dtos/IUpdatePaymentDTO';

class UpdatePaymentServices {
  private paymentRepository: IPaymentRepository;

  constructor(paymentRepository: IPaymentRepository) {
    this.paymentRepository = paymentRepository;
  }

  public async execute({
    id,
    value,
    card_id,
    order_id,
    payment_method_id,
  }: IUpdatePaymentDTO): Promise<Payment> {
    const payment = await this.paymentRepository.findById(id);

    if (!payment) {
      throw new AppError('Payment does not exist', 404);
    }

    payment.value = value;
    payment.card_id = card_id;
    payment.order_id = order_id;
    payment.payment_method_id = payment_method_id;

    await this.paymentRepository.save(payment);

    return payment;
  }
}

export default UpdatePaymentServices;
