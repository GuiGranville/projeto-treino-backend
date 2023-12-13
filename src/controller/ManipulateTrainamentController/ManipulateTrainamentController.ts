import { Request, Response } from "express";
import knex from "../../database/db";

export class ManipulateTrainament{


    async VinculateExerciseToTraine(req: Request, res: Response){

        try{
            await knex('tbl_exercicio_treino')
            .insert({
                cd_treino: req.body.cd_treino,
                cd_exercicio: req.body.cd_exercicio,
                peso: req.body.peso,
                qt_repeticoes: req.body.qt_repeticoes,
                qt_serie: req.body.qt_serie,
                tempo_descanso: req.body.tempo_descanso,
                cd_tecnica_avancada: req.body.cd_tecnica_avancada,
                cd_usuario: req.body.cd_usuario,
                tp_situacao: req.body.tp_situacao
            }).then((response) =>{
                res.status(200).json({message: "Vinculate a exercise to traine succesfuly !"})
            }).catch((err) =>{
                console.log(err)
                res.status(400).json({message: "Error to vinculate a exercise to traine !"})
            })
            
        }catch(err){
            console.log(err);
            res.status(500).json({message: "A server error ocurred !"})
        }
    }
}