import ICreateAdministratorDTO from '../dtos/ICreateAdministratorDTO';
import Administrator from '../infra/typeorm/entity/Administrator';

export default interface IAdministratorRepository {
  create(dataAdmin: ICreateAdministratorDTO): Promise<Administrator>;
  findById(admin_id: string): Promise<Administrator | undefined>;
  findByEmail(email: string): Promise<Administrator | undefined>;
}
