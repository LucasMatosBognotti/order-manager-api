import AppError from '../../../shared/error/AppError';
import Administrator from '../infra/typeorm/entity/Administrator';
import IAdministratorRepository from '../repository/IAdministratorRepository';

class FindOneAdministratorService {
  private administratorRepository: IAdministratorRepository;

  constructor(administratorRepository: IAdministratorRepository) {
    this.administratorRepository = administratorRepository;
  }

  public async execute(admin_id: string): Promise<Administrator> {
    const administrator = await this.administratorRepository.findById(admin_id);

    if (!administrator) {
      throw new AppError('Administrator does not exist', 404);
    }

    return administrator;
  }
}

export default FindOneAdministratorService;
