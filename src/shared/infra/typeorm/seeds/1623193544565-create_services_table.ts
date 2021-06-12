import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import Service from '../../../../modules/service/infra/typeorm/entity/Service';

export default class ServiceSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Service)
      .values([
        {
          name: 'Pé',
          price: 23.32,
        },
        {
          name: 'Mão',
          price: 30.32,
        },
        {
          name: 'Cabelo',
          price: 123.42,
        },
      ])
      .execute();
  }
}
