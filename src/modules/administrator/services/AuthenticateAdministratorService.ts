import jwt from 'jsonwebtoken';

import { secret, expiresIn } from '../../../config/auth';

import AppError from '../../../shared/error/AppError';
import Administrator from '../infra/typeorm/entity/Administrator';

import IHashProvider from '../provider/model/IHashProvider';
import IAdministratorRepository from '../repository/IAdministratorRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  administrator: Administrator;
  token: string;
}

class AuthenticateAdministratorService {
  private administratorRepository: IAdministratorRepository;

  private hashProvider: IHashProvider;

  constructor(
    administratorRepository: IAdministratorRepository,
    hashProvider: IHashProvider,
  ) {
    this.administratorRepository = administratorRepository;
    this.hashProvider = hashProvider;
  }

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const administrator = await this.administratorRepository.findByEmail(email);

    if (!administrator) {
      throw new AppError('Administrator does not exist', 404);
    }

    const passwordMatch = await this.hashProvider.compareHash(
      password,
      administrator.password,
    );

    if (!passwordMatch) {
      throw new AppError('Password does not match');
    }

    const token = jwt.sign({}, secret, {
      subject: administrator.id,
      expiresIn,
    });

    return {
      administrator,
      token,
    };
  }
}

export default AuthenticateAdministratorService;
