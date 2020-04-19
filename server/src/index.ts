import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';


class Server {

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port',process.env.PORT || 3000);
        this.app.set('host',process.env.HOST || '0.0.0.0');
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({
            extended: true
        }))
    }

    routes(): void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/games',gamesRoutes);
    }

    start(): void {
        console.log(this.app.get('port'),this.app.get('host'))
        this.app.listen(this.app.get('port'),() => {
            console.log(`Server on port ${this.app.get('port')}`)
        })
    }
        
    
    
}

const server = new Server();
server.start();