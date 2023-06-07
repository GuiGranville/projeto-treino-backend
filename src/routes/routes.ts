import { Router } from 'express';
import cors from 'cors';
import { Request, Response } from 'express';

import { ManipulateUser } from '../controller/ManipulateUserController/ManipulateUserController';
import { ValidateLogin } from '../middlewares/ValidateLogin/ValidateLogin';
import { AuthController } from '../controller/AuthController/AuthController';
import { ValidateToken } from '../middlewares/ValidadeToken/ValidateToken';

const routes = Router();
const manipulateUser = new ManipulateUser()
// Liberar origens das requisições
routes.use(cors({ origin: '*' })); // Exemplo de parâmetro: http://localhost:3001 ou *

// Rota de verificação de integridade da API
routes.post('/login', ValidateLogin, AuthController);

routes.use(ValidateToken);

routes.post('/createUser', (req: Request, res: Response)=> 
manipulateUser.CreateUser(req, res)
)


export default routes;
