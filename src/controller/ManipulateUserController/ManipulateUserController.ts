import knex from '../../database/db';
import * as bcrypt from 'bcrypt'
import { Request, Response } from 'express';
import { UserInsertType } from '../../types/UserTypes/UserTypes';


export default class ManipulateUser{
  
    constructor(){

    }
    async CreateUser(req: Request, res: Response) {
      try {
        const user: UserInsertType = req.body;
  
        const EncryptedPassword = await bcrypt.hash(user.senha, 10)
  
        await knex('tbl_usuario')
        .insert({
            nm_usuario: user.nm_usuario,
            nm_nome: user.nm_nome,
            nm_sobrenome: user.nm_sobrenome, 
            senha: EncryptedPassword, 
            sn_admin: user.sn_admin})
        .then((response) =>{
            res.json({ message: 'User created successfully' });
        }).catch((error) =>{
          res.status(500).json({ message: 'Error creating user !' });
        })

        
      } catch (error) {
        console.log(error)
        res.status(500).json({ message: "A server error ocurred !" });
      }
    }

    async GetAllUsers(){
        
    }
} 