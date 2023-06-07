import { Router } from 'express';
import cors from 'cors';
import { Request, Response } from 'express';


import { ValidateLogin } from '../middlewares/ValidateLogin/ValidateLogin';
import { AuthController } from '../controller/AuthController/AuthController';
import { ValidateToken } from '../middlewares/ValidadeToken/ValidateToken';
import ManipulateExercise from '../controller/ManipulateExerciseController/ManipulateExerciseController';
import  ManipulateUser  from '../controller/ManipulateUserController/ManipulateUserController';

const routes = Router();
const manipulateUser = new ManipulateUser()
const manipulateExercise = new ManipulateExercise()

routes.use(cors({ origin: '*' })); 


routes.post('/login', ValidateLogin, AuthController);

routes.use(ValidateToken);


//routes from user
routes.post('/createUser', (req: Request, res: Response) => 
    manipulateUser.CreateUser(req, res)
)


//routes for exercise
routes.post('/createExercise', (req: Request, res: Response) => {
    manipulateExercise.createExercise(req, res)
})


export default routes;
