import Service from '../infra/typeorm/entity/Service';

import ICreateServiceDTO from '../dtos/ICreateServiceDTO';

export default interface IServiceRepository {
  create(dataService: ICreateServiceDTO): Promise<Service>;
  findById(id: string): Promise<Service | undefined>;
  findAll(): Promise<Service[] | undefined>;
  save(service: Service): Promise<Service>;
  delete(id: string): Promise<void>;
}
