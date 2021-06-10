import { Request, Response } from 'express';

import FindOneAdministratorService from '../../../services/FindOneAdministratorService';
import AdministratroRepository from '../../typeorm/repository/AdministratorRepository';

class AdministratorController {
  public async findOne(req: Request, res: Response): Promise<Response> {
    const admin_id = req.admin.id;

    const administratorRepository = new AdministratroRepository();

    const findOneAdministrator = new FindOneAdministratorService(
      administratorRepository,
    );

    const administrator = await findOneAdministrator.execute(admin_id);

    return res.json(administrator);
  }
}

export default AdministratorController;
