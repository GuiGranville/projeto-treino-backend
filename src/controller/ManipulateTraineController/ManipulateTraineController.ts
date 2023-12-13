import knex from "../../database/db";
import { Request, Response } from "express";
import { TraineTypes } from "../../types/TraineTypes/TraineTypes";

export class ManipulateTraineController {

    constructor() {

    }

    async createTraine(req: Request, res: Response) {

        try {


            const traine: TraineTypes = req.body;

            await knex('tbl_treino').insert({
                nm_treino: traine.nm_treino,
                dt_criacao: traine.dt_criacao,
                ds_nivel_dificuldade: traine.ds_nivel_dificuldade,
                dt_realizacao: traine.dt_realizacao,
                hr_duracao: traine.hr_duracao,
                nv_intensidade: traine.nv_intensidade,
                obs_treino: traine.obs_treino,
                cd_usuario: traine.cd_usuario
            } as TraineTypes).then(() => {
                res.status(200).json({ message: "Traine created succesfuly !" })
            }).catch((erro) => {
                console.log(erro)
                res.status(400).json({ message: "Error to create traine !" })
            })
        } catch (err) {
            res.status(500).json({ message: "A server error ocurred !" })
        }
    }

    
}