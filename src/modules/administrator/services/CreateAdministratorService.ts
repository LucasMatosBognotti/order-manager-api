import Administrator from '../infra/typeorm/entity/Administrator';

import ICreateAdministratorDTO from '../dtos/ICreateAdministratorDTO';
import IAdministratorRepository from '../repository/IAdministratorRepository';
import IHashProvider from '../provider/model/IHashProvider';

class CreateAdministratorService {
  private administratorRepository: IAdministratorRepository;

  private hashProvider: IHashProvider;

  constructor(
    administratorRepository: IAdministratorRepository,
    hashProvider: IHashProvider,
  ) {
    this.administratorRepository = administratorRepository;
    this.hashProvider = hashProvider;
  }

  public async execute({
    name,
    email,
    password,
  }: ICreateAdministratorDTO): Promise<Administrator> {
    const administrator = await this.administratorRepository.create({
      name,
      email,
      password: await this.hashProvider.generateHash(password),
    });

    return administrator;
  }
}

export default CreateAdministratorService;
