import Professional from '../infra/typeorm/entity/Professional';

import ICreateProfessionalDTO from '../dtos/ICreateProfessionalDTO';

export default interface IProfessionalRepository {
  create(dataAdmin: ICreateProfessionalDTO): Promise<Professional>;
  findAll(): Promise<Professional[] | undefined>;
  findById(admin_id: string): Promise<Professional | undefined>;
  save(professional: Professional): Promise<Professional>;
  delete(id: string): Promise<void>;
}
