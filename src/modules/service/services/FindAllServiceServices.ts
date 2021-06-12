import Service from '../infra/typeorm/entity/Service';

import AppError from '../../../shared/error/AppError';

import IServiceRepository from '../repository/IServiceRepository';

class FindAllServiceServices {
  private serviceRepository: IServiceRepository;

  constructor(serviceRepository: IServiceRepository) {
    this.serviceRepository = serviceRepository;
  }

  public async execute(): Promise<Service[]> {
    const services = await this.serviceRepository.findAll();

    if (!services?.length) {
      throw new AppError('Services does not exist', 404);
    }

    return services;
  }
}

export default FindAllServiceServices;
