import express, {Application} from 'express';
import indexRoutes from "../routes/indexRoutes";
class Server{
   public app:Application;

    constructor(){
        this.app=express();
        this.config();
        this.router();
    }

    config():void{
        this.app.set('port',process.env.PORT ||3000);
    }

    router():void{
        this.app.use(indexRoutes);
    }

    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log("init by port: ",this.app.get('port'));
        });
    }
}
const server =new Server();
server.start();