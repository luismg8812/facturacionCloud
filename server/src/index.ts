import express, {Application} from 'express';

class Server{
   public app:Application;

    constructor(){
        express();
    }
}
new Server();