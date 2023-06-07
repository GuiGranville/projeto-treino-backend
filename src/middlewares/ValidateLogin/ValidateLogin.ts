import { Request, Response, NextFunction } from 'express';

export const ValidateLogin = async (req: Request, res: Response, next: NextFunction) => {
  // Obtenção dos dados da requisição e seus tipos
  const user:any = req.body;

  // Valida se os dados obrigatórios foram passados
  if (!user.nm_usuario || !user.senha) {
    return res.status(403).json({ message: 'Username or password is invalid!' });
  }
  next();
};