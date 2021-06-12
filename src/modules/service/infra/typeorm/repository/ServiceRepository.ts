import { getRepository, Repository } from 'typeorm';

import Service from '../entity/Service';

import ICreateServiceDTO from '../../../dtos/ICreateServiceDTO';
import IServiceRepository from '../../../repository/IServiceRepository';

class ServiceRepository implements IServiceRepository {
  private ormRepository: Repository<Service>;

  constructor() {
    this.ormRepository = getRepository(Service);
  }

  public async create(dataService: ICreateServiceDTO): Promise<Service> {
    const service = this.ormRepository.create(dataService);

    await this.ormRepository.save(service);

    return service;
  }

  public async findAll(): Promise<Service[] | undefined> {
    const services = this.ormRepository.find();

    return services;
  }

  public async findById(id: string): Promise<Service | undefined> {
    const service = await this.ormRepository.findOne(id);

    return service;
  }

  public async save(service: Service): Promise<Service> {
    const serviceSave = await this.ormRepository.save(service);

    return serviceSave;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default ServiceRepository;
