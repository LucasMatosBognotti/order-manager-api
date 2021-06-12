import Service from '../infra/typeorm/entity/Service';

import ICreateServiceDTO from '../dtos/ICreateServiceDTO';
import IServiceRepository from '../repository/IServiceRepository';

class CreateServiceServices {
  private serviceRepository: IServiceRepository;

  constructor(serviceRepository: IServiceRepository) {
    this.serviceRepository = serviceRepository;
  }

  public async execute({ name, price }: ICreateServiceDTO): Promise<Service> {
    const service = await this.serviceRepository.create({
      name,
      price,
    });

    return service;
  }
}

export default CreateServiceServices;
