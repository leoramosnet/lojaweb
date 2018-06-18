import { Request, Response } from "express";
import * as HttpStatus from 'http-status';
import { VendaService } from './../services/VendaService';
import { json } from "sequelize";


/**
 * Controller do Venda.
 */
export class VendaController {

    /**
     * Serviço de venda
     */
    private vendaService;

    /**
     * Construtor da classe que instancia o serviço de venda
     */
    constructor() {
        this.vendaService = new VendaService(); 
    }

    /**
     * Pesquisa vendas por estado, cidade ou loja
     */
    public find = (req: Request, res: Response) => {

        if(req.params.param=='estado') {
            return this.findByEstado(req, res)
        } else if(req.params.param=='cidade') {
            return this.findByCidade(req, res)
        } else if(req.params.param=='loja') {
            return this.findByLoja(req, res)
        } else {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Parâmetro de pesquisa inválido.');
        }

    }
    
    /**
     * Pesquisa vendas por estado (UF)
     */
    private findByEstado = (req: Request, res: Response) => {
       
        try{
        
            this.vendaService.getListByEstado(req.params.value)
            .then(result => {
                if(!result || result.length < 1) {
                    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Venda não encontrada.');
                }
                const vendas = result.map(item => {
                    return {
                        estado: item.sigla,
                        produto: item.nome_produto,
                        venda: parseInt(item.total_venda)
                    }
                })
                return res.status(HttpStatus.OK).json(vendas); 
            })

        } catch (erro) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(`Erro ao pesquisar as vendas. ${erro.message}`);
        }
        
    }

    /**
     * Pesquisa vendas por cidade
     */
    private findByCidade = (req: Request, res: Response) => {
       
        try{
        
            this.vendaService.getListByCidade(req.params.value)
            .then(result => {
                if(!result || result.length < 1) {
                    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Venda não encontrada.');
                }
                const vendas = result.map(item => {
                    return {
                        cidade: item.cidade,
                        produto: item.nome_produto,
                        venda: parseInt(item.total_venda)
                    }
                })

                return res.status(HttpStatus.OK).json(vendas); 
            })
            .catch(erro => {throw erro})

        } catch (erro) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(`Erro ao pesquisar as vendas. ${erro.message}`);
        }
        
    }

    /**
     * Pesquisa vendas por loja
     */
    private findByLoja = (req: Request, res: Response) => {
       
        try{
        
            this.vendaService.getListByLoja(req.params.value)
            .then(result => {
                if(!result || result.length < 1) {
                    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Vendas não encontradas.');
                }
                const vendas = result.map(item => {
                    return {
                        produto: item.nome_produto,
                        venda: parseInt(item.total_venda)
                    }
                })

                return res.status(HttpStatus.OK).json(vendas); 
            })
            .catch(erro => {throw erro})

        } catch (erro) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(`Erro ao pesquisar as vendas. ${erro.message}`);
        }
    }

}

