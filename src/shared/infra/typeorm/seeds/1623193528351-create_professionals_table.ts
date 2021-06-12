import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import Professional from '../../../../modules/professional/infra/typeorm/entity/Professional';

export default class ProfessionalSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Professional)
      .values([
        {
          name: 'Francisco Augusto Oliveira',
          comission: 23.1,
        },
        {
          name: 'Tatiane Pietra Esther Porto',
          comission: 4.12,
        },
        {
          name: 'Ryan Cauã Anderson Martins',
          comission: 102.13,
        },
        {
          name: 'Maitê Lorena Castro',
          comission: 68.92,
        },
      ])
      .execute();
  }
}
