import { Request, Response } from 'express';
import { ExerciseInserType } from '../../types/ExerciseTypes/ExerciseTypes';
import knex from '../../database/db';

export default class ManipulateExercise{
    constructor(){

    }
    
    async createExercise(req: Request, res: Response){
        try{

        
        const exercise: ExerciseInserType = req.body

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
}