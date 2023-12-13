import { Router } from 'express';
import cors from 'cors';
import { Request, Response } from 'express';


import { ValidateLogin } from '../middlewares/ValidateLogin/ValidateLogin';
import { AuthController } from '../controller/AuthController/AuthController';
import { ValidateToken } from '../middlewares/ValidadeToken/ValidateToken';
import ManipulateExercise from '../controller/ManipulateExerciseController/ManipulateExerciseController';
import  ManipulateUser  from '../controller/ManipulateUserController/ManipulateUserController';
import { ManipulateTraineController } from '../controller/ManipulateTraineController/ManipulateTraineController';
import { ManipulateTrainament } from '../controller/ManipulateTrainamentController/ManipulateTrainamentController';

const routes = Router();
const manipulateUser = new ManipulateUser();
const manipulateExercise = new ManipulateExercise();
const manipulateTraine = new ManipulateTraineController();
const manipulateTrainament = new ManipulateTrainament();

routes.use(cors({ origin: '*' })); 


routes.post('/login', ValidateLogin, AuthController);

routes.use(ValidateToken);


//routes from user
routes.post('/createUser', (req: Request, res: Response) => 
    manipulateUser.CreateUser(req, res)
)


//routes for exercise
routes.post('/exercise/createExercise', (req: Request, res: Response) => {
    manipulateExercise.createExercise(req, res);
})
routes.put('/exercise/editExercise', (req: Request, res: Response) =>{
    manipulateExercise.editExercise(req, res);
})
routes.get("/exercise/getAllExercises",(req: Request, res: Response) =>{
    manipulateExercise.getAllExercises(req, res);
})
routes.get("/exercise/getOneExercise", (req: Request, res: Response) => {
    manipulateExercise.getOneExercise(req, res);
})


routes.post("/traine/createTraine", (req: Request, res: Response) => {
    manipulateTraine.createTraine(req, res);
})

routes.post("/traine/vinculateExerciceToTraine", (req: Request, res: Response) => {
    manipulateTrainament.VinculateExerciseToTraine(req, res);
})
export default routes;
