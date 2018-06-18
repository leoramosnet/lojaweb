import * as express from 'express';
import { Application } from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

import Routes from './routes/Routes';
import {AllowCrossDomain} from './middlewares/AllowCrossDomain';

const helmet = require('helmet');
const config  = require('./config/env/config')();

/**
 * Classe principal da API para definição de middlewares e rotas
 */
class Api {
    
    /**
     * Objeto Express
     */
    public express: Application;
    
    constructor() {
        this.express = express();
        this.middleware();
        this.router(this.express);
    }

    /**
     * Método que define os middlewares
     */
    middleware(): void {
        this.express.use(helmet());
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({extended: true}));
        this.express.use(bodyParser.json());
        this.express.use(new AllowCrossDomain().allowCrossDomain);
    }

    /**
     * Método para iniciar as definições das rotas
     * @param app Objeto Application do Express
     */
    private router(app: Application): void {
        Routes.initRoutes(app);
    }
}

export default new Api().express;
