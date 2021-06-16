import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import AdministratroRepository from '../../typeorm/repository/AdministratorRepository';
import BCryptHashProvider from '../../../provider/implementations/BCryptHashProvider';

import FindOneAdministratorService from '../../../services/FindOneAdministratorService';
import CreateAdministratorService from '../../../services/CreateAdministratorService';

class AdministratorController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const administratorRepository = new AdministratroRepository();

    const hashProvider = new BCryptHashProvider();

    const createAdministrator = new CreateAdministratorService(
      administratorRepository,
      hashProvider,
    );

    const administrator = await createAdministrator.execute({
      name,
      email,
      password,
    });

    return res.json(classToClass(administrator));
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const admin_id = req.admin.id;

    const administratorRepository = new AdministratroRepository();

    const findOneAdministrator = new FindOneAdministratorService(
      administratorRepository,
    );

    const administrator = await findOneAdministrator.execute(admin_id);

    return res.json(classToClass(administrator));
  }
}

export default AdministratorController;
