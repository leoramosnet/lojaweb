import { Request, Response } from "express";
import * as HttpStatus from 'http-status';
import { AutenticacaoService } from './../services/AutenticacaoService';

/**
 * Controller da Autenticação
 */
export class AutenticacaoController {

    /**
     * Serviço de autenticação
     */
    private autenticacaoService;

    /**
     * Construtor da classe que instancia o serviço de autenticação
     */
    constructor() {
        this.autenticacaoService = new AutenticacaoService(); 
    }

    /**
     * Método que realiza o login
     */
    login = (req: Request, res: Response) => {

        try {
            if(!req.body.usuario || !req.body.senha) {
                return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Login ou senha não foi informado.');
            }

            this.autenticacaoService.login(req.body.usuario, req.body.senha)
            .then(autenticado => {                
                if(!autenticado) {
                    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Login ou senha inválido');
                }
                return res.status(HttpStatus.OK).json(true); 
            })
            .catch(erro => {throw erro})
            
        } catch (erro) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Erro ao consultar o login.');
        }

    }

}

