import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import Order from '../../../../modules/order/infra/typeorm/entities/Order';

export default class OrderSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Order)
      .values([
        {
          customer_name: 'Cristiane Andreia Isabelle da Costa',
        },
        {
          customer_name: 'Ester Tereza Gomes',
        },
        {
          customer_name: 'Isaac Bernardo da Cruz',
        },
        {
          customer_name: 'Murilo Vicente Joaquim Jesus',
        },
        {
          customer_name: 'Marcela Benedita Sabrina Farias',
        },
        {
          customer_name: 'Bernardo Breno Guilherme Gomes',
        },
      ])
      .execute();
  }
}
