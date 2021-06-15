import Payment from '../infra/typeorm/entity/Payment';

import ICreatePaymentDTO from '../dtos/ICreatePaymentDTO';

export default interface IPaymentRepository {
  create(dataPayment: ICreatePaymentDTO): Promise<Payment>;
  findAll(): Promise<Payment[] | undefined>;
  findById(id: string): Promise<Payment | undefined>;
  save(service: Payment): Promise<Payment>;
  delete(id: string): Promise<void>;
}
