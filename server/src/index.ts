import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from "./routes/indexRoutes";
import usuarioRoutes from "./routes/usuarioRoutes";

class Server{
   public app:Application;

    constructor(){       
        this.app=express();
        this.config();
        this.router();
    }

    config():void{
        this.app.set("port",process.env.PORT ||9090);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    router():void{
        this.app.use(indexRoutes);
        this.app.use('/usuario',usuarioRoutes);
        
    }
    
    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log("init by port: ",this.app.get('port'));
        });
    }
}
const server =new Server();
server.start();