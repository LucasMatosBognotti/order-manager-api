import Payment from '../infra/typeorm/entity/Payment';

import ICreatePaymentDTO from '../dtos/ICreatePaymentDTO';
import IPaymentRepository from '../repository/IPaymentRepository';

class CreatePaymentServices {
  private paymentRepository: IPaymentRepository;

  constructor(paymentRepository: IPaymentRepository) {
    this.paymentRepository = paymentRepository;
  }

  public async execute({
    value,
    card_id,
    order_id,
    payment_method_id,
  }: ICreatePaymentDTO): Promise<Payment> {
    const payment = await this.paymentRepository.create({
      value,
      card_id,
      order_id,
      payment_method_id,
    });

    return payment;
  }
}

export default CreatePaymentServices;
