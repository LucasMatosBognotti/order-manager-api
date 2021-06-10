import { getRepository, Repository } from 'typeorm';

import Administrator from '../entity/Administrator';

import IAdministratorRepository from '../../../repository/IAdministratorRepository';

class AdministratroRepository implements IAdministratorRepository {
  private ormRepository: Repository<Administrator>;

  constructor() {
    this.ormRepository = getRepository(Administrator);
  }

  public async findById(admin_id: string): Promise<Administrator | undefined> {
    const administrator = await this.ormRepository.findOne(admin_id);

    return administrator;
  }

  public async findByEmail(email: string): Promise<Administrator | undefined> {
    const administrator = await this.ormRepository.findOne({
      where: { email },
    });

    return administrator;
  }
}

export default AdministratroRepository;
