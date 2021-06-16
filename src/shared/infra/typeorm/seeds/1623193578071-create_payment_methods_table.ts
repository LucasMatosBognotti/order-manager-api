import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import PaymentMethod from '../../../../modules/payment_method/infra/typeorm/entity/PaymentMethod';

export default class PaymentMethodSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(PaymentMethod)
      .values([
        {
          name: 'CREDIT',
        },
        {
          name: 'DEBIT',
        },
        {
          name: 'MONEY',
        },
        {
          name: 'TRANSFERENCE',
        },
        {
          name: 'BANK_CHECK',
        },
      ])
      .execute();
  }
}
