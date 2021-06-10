import { verify } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

import AppError from '../../../../../shared/error/AppError';
import { secret } from '../../../../../config/auth';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, secret);

    const { sub } = decoded as ITokenPayload;

    req.admin = {
      id: sub,
    };

    next();
  } catch (err) {
    throw new Error('Invalid JWT token');
  }
}
