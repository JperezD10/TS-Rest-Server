import express, {Application} from 'express'
import userRoutes from '../routes/usuario';
import cors from 'cors'
import db from '../db/connection';
class Server{
    private app: Application;
    private port:string;
    private paths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection (){
        try {

            await db.authenticate();
            console.log("Conexion establecida");
        } catch (error) {
            throw new Error(`Ha ocurrido un problema ${error}`);
        }
    }

    middlewares(){
        //CORS
        this.app.use(cors());
        
        //Lectura de body
        this.app.use(express.json());

        //Carpeta publica
        this.app.use( express.static('public'));
    }
    routes(){
        this.app.use(this.paths.usuarios, userRoutes)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`);
        })
    }
}

export default Server;