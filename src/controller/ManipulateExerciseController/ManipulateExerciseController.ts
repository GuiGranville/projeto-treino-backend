import { Request, Response } from 'express';
import { ExerciseInsertType } from '../../types/ExerciseTypes/ExerciseTypes';
import knex from '../../database/db';

export default class ManipulateExercise{

    async getAllExercises(req: Request, res: Response){
        try{
            await knex('tbl_exercicio').select('*')
            .then((response) =>{
                return res.json(response)
            }).catch((response) =>{
                return res.status(400).json({message: "No exercises found !"})
            })


        }catch(error){
            return res.status(500).json({message: "A server error ocurred !" })
        }
    }

    async getOneExercise(req: Request, res: Response){

        try{

            const cd_exercise = req.query

            await knex('tbl_exercicio')
            .where({cd_exercicio: cd_exercise.cd_exercise})
            .select("*")
            .then((response) => {
                return res.status(200).json(response)
            }).catch((error) =>{
                console.log(error)
                return res.status(400).json({message: "No exercise found !"})
            })

        }catch(error){
            return res.status(500).json({message: "A server error ocurred !"})
        }

    }
    
    async createExercise(req: Request, res: Response){
        try{

        
            const exercise: ExerciseInsertType = req.body

            await knex('tbl_exercicio').insert({
                nm_exercicio: exercise.nm_exercicio,
                url_video: exercise.url_video,
                obs_exercicio: exercise.obs_exercicio,
                local_ativacao: exercise.local_ativacao
            }).then((response) =>{
                res.status(200).json({message: "Exercise created successfuly !"})
            }).catch((error) =>{
                res.status(400).json({message: "Error to create exercise !"})
            })
        }catch(error){
            res.status(500).json({message: "A server error ocurred !"})
    }
    }

    async editExercise(req:Request, res:Response){
        try{

            const cd_exercise = req.query;
            const fieldsEdit: ExerciseInsertType = req.body;

            let fieldsNotNull = new Object;

            for(let item in fieldsEdit){
                if(fieldsEdit[item] != null){
                    fieldsNotNull[item] = fieldsEdit[item]
                }
                
            }


            await knex('tbl_exercicio')
            .where({cd_exercicio: cd_exercise.cd_exercise})
            .update(fieldsNotNull)
            .then((response) =>{
                console.log(response)
            }).catch((err) =>{
                console.log(err)
            })

            return res.status(200).json({message: "Exercise edit successfuly !"})
        }catch(error){
            return res.status(500).json({ error: 'A server error ocurred !' });
        }
    }
}