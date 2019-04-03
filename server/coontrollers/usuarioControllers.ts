import {Request,Response} from 'express';

class UsuarioControllers{
    public usuarioByMail (req:Request, res:Response){
        res.send("usuario controller");
    }

}

export const usuarioController = new UsuarioControllers();