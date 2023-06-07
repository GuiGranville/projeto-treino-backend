import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export function ValidateToken(req: Request, res: Response, next: NextFunction){
    try{
        const authHeader = req.headers['authorization'];
        const token = authHeader;
        
        if(!token) return res.status(401).json({message: "Not Authorized !"});
        
        jwt.verify(token, process.env.SECRET, (err: any, decoded: any) =>{
            if (err) return res.status(403);

            next();
        });
    }catch(error){
        return res.status(500).json({ message: 'Erro ao realizar a autenticação!' });
    }
}    