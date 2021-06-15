import Payment from '../infra/typeorm/entity/Payment';

import AppError from '../../../shared/error/AppError';

import IPaymentRepository from '../repository/IPaymentRepository';

class FindAllPaymentService {
  private paymentRepository: IPaymentRepository;

  constructor(paymentRepository: IPaymentRepository) {
    this.paymentRepository = paymentRepository;
  }

  public async execute(): Promise<Payment[]> {
    const payments = await this.paymentRepository.findAll();

    if (!payments?.length) {
      throw new AppError('Payments does not exist', 404);
    }

    return payments;
  }
}

export default FindAllPaymentService;
