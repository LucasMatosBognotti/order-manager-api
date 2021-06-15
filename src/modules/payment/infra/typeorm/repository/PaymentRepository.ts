import { getRepository, Repository } from 'typeorm';

import Payment from '../entity/Payment';

import ICreatePaymentDTO from '../../../dtos/ICreatePaymentDTO';
import IPaymentRepository from '../../../repository/IPaymentRepository';

class PaymentRepository implements IPaymentRepository {
  private ormRepository: Repository<Payment>;

  constructor() {
    this.ormRepository = getRepository(Payment);
  }

  public async create(dataPayment: ICreatePaymentDTO): Promise<Payment> {
    const payment = this.ormRepository.create(dataPayment);

    await this.ormRepository.save(payment);

    return payment;
  }

  public async findAll(): Promise<Payment[] | undefined> {
    const payments = await this.ormRepository.find({
      relations: ['order', 'card', 'payment_method'],
    });

    return payments;
  }

  public async findById(id: string): Promise<Payment | undefined> {
    const payment = await this.ormRepository
      .createQueryBuilder('payments')
      .innerJoinAndSelect('payments.order', 'orders')
      .innerJoinAndSelect('payments.card', 'cards')
      .innerJoinAndSelect('payments.payment_method', 'payment_methods')
      .where('payments.id = :id', { id })
      .getOne();

    return payment;
  }

  public async save(payment: Payment): Promise<Payment> {
    const paymentSave = await this.ormRepository.save(payment);

    return paymentSave;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default PaymentRepository;
