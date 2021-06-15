import Payment from '../infra/typeorm/entity/Payment';

import AppError from '../../../shared/error/AppError';

import IPaymentRepository from '../repository/IPaymentRepository';

class FindOnePaymentServices {
  private paymentRepository: IPaymentRepository;

  constructor(paymentRepository: IPaymentRepository) {
    this.paymentRepository = paymentRepository;
  }

  public async execute(id: string): Promise<Payment> {
    const payment = await this.paymentRepository.findById(id);

    if (!payment) {
      throw new AppError('Payment does not exist', 404);
    }

    return payment;
  }
}

export default FindOnePaymentServices;
