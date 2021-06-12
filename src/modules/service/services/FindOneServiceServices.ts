import Service from '../infra/typeorm/entity/Service';

import AppError from '../../../shared/error/AppError';

import IServiceRepository from '../repository/IServiceRepository';

class FindOneServiceServices {
  private serviceRepository: IServiceRepository;

  constructor(serviceRepository: IServiceRepository) {
    this.serviceRepository = serviceRepository;
  }

  public async execute(id: string): Promise<Service> {
    const service = await this.serviceRepository.findById(id);

    if (!service) {
      throw new AppError('Service does not exist', 404);
    }

    return service;
  }
}

export default FindOneServiceServices;
