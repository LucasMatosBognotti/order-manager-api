import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import AdministratroRepository from '../../typeorm/repository/AdministratorRepository';
import BCryptHashProvider from '../../../provider/implementations/BCryptHashProvider';

import AuthenticateAdministratorService from '../../../services/AuthenticateAdministratorService';

class AuthenticateAdministratorController {
  public async session(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const administratroRepository = new AdministratroRepository();

    const hashProvider = new BCryptHashProvider();

    const authenticate = new AuthenticateAdministratorService(
      administratroRepository,
      hashProvider,
    );

    const administrator = await authenticate.execute({
      email,
      password,
    });

    return res.json(classToClass(administrator));
  }
}

export default AuthenticateAdministratorController;
