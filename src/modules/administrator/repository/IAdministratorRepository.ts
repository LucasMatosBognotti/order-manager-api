import Administrator from '../infra/typeorm/entity/Administrator';

export default interface IAdministratorRepository {
  findById(admin_id: string): Promise<Administrator | undefined>;
  findByEmail(email: string): Promise<Administrator | undefined>;
}
