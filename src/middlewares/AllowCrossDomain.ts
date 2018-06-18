import {Router, Request, Response, NextFunction} from 'express';

/**
 * Classe que configura os cabeçalhos HTTP
 */
export class AllowCrossDomain {

    constructor() {}

    /**
     * Método middleware que permite requisões GET,PUT,POST,DELETE,OPTIONS
     * @param req 
     * @param res 
     * @param next 
     */
    allowCrossDomain(req: Request, res: Response, next: NextFunction) {

        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

        if (req.method == 'OPTIONS') {
            res.sendStatus(200);
        }
        else {
            next();
        }
    }
}