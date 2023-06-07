import knex from '../../database/db';
import * as bcrypt from 'bcrypt'
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';



export async function AuthController(req: Request, res: Response){
    try{
        const user:any = req.body;

        const response = await knex.select('cd_usuario','nm_usuario', 'senha').from('tbl_usuario').where({nm_usuario: user.nm_usuario})
        
        console.log(response[0].cd_usuario)
        if(response.length === 0){
            return res.status(403).json({ message: 'Username or password is invalid!' });
        }

        const userPassword = response[0].senha
        const comparePassword = await bcrypt.compare(user.senha, userPassword )

        if(!comparePassword){
            return res.status(403).json({ message: 'Username or password is invalid!' });
        }
        const token = jwt.sign({ user }, process.env.SECRET);
        
        res.status(200).json({token: token, cd_usuario: response[0].cd_usuario, nm_usuario: response[0].nm_usuario})
    }catch(error){
        res.status(500).json({message: 'A server error ocurred'})
    }
    }
