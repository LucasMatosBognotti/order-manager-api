import Service from '../infra/typeorm/entity/Service';

import AppError from '../../../shared/error/AppError';

import IServiceRepository from '../repository/IServiceRepository';
import IUpdateServiceDTO from '../dtos/IUpdateServiceDTO';

class UpdateServiceServices {
  private serviceRepository: IServiceRepository;

  constructor(serviceRepository: IServiceRepository) {
    this.serviceRepository = serviceRepository;
  }

  public async execute({
    id,
    name,
    price,
  }: IUpdateServiceDTO): Promise<Service> {
    const service = await this.serviceRepository.findById(id);

    if (!service) {
      throw new AppError('Service does not exist', 404);
    }

    service.name = name;
    service.price = price;

    await this.serviceRepository.save(service);

    return service;
  }
}

export default UpdateServiceServices;
