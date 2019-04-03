import {Router} from 'express';
import { usuarioController } from '../coontrollers/usuarioControllers';

class UsuarioRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }

    config():void{
        this.router.get('/usuarioByMail',usuarioController.usuarioByMail);
    }
}
const usuarioRoutes= new UsuarioRoutes();
export default usuarioRoutes.router;