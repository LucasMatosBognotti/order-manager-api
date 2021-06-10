import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import Administrator from '../../../../modules/administrator/infra/typeorm/entity/Administrator';

export default class AdministratorSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Administrator)
      .values([
        {
          name: 'Lucas Matos',
          email: 'lucas@gmail.com',
          password: '230i23908293',
        },
      ])
      .execute();
  }
}
