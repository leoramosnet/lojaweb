import { ProdutoEntity } from './../entity/ProdutoEntity';
import { Request, Response } from "express";
import * as HttpStatus from 'http-status';
import { ProdutoService } from "../services/ProdutoService";

/**
 * Controller do Produto.
 */
export class ProdutoController {

    /**
     * Serviço de produto
     */
    private produtoService;

    /**
     * Construtor da classe que instancia o serviço de produto
     */
    constructor() {
        this.produtoService = new ProdutoService(); 
    }

    /**
     * Método para criar o produto
     */
    public create = (req: Request, res: Response) => {
        try {
            
            const produtoEntity = this.parseProdutoEntity(req.body);

            this.produtoService.create(produtoEntity)
            .then(produto => {
                if(!produto)
                    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('produto não foi cadastrado.');
                
                return res.status(HttpStatus.CREATED).json(produto)
            })
            .catch(erro => {throw erro})
        } catch (erro) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(`Erro ao cadastrar o produto. ${erro.message}`);
        }
    }

    /**
     * Método para deletar o produto
     */
    public delete = (req: Request, res: Response) => {        
        try {

            this.codigoValidate(req.body);

            this.produtoService.remove(req.body.codigo)
            .then(produto => {
                if(!produto)
                    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('produto não foi excluído.');
                
                return res.status(HttpStatus.CREATED).json(produto)
            })
            .catch(erro => {throw erro})
        } catch (erro) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(`Erro ao excluir o produto. ${erro.message}`);
        }
    }

    /**
     * Método para pesquisar os 10 últimos produtos
     */
    public findAll = (req: Request, res: Response) => {
        
        try{
        
            this.produtoService.getAll()
            .then(produtos => {
                if(!produtos || produtos.count < 1) {
                    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Produtos não encontrados.');
                }
                
                return res.status(HttpStatus.OK).json(produtos); 
            })
            .catch(erro => {
                throw erro})

        } catch (erro) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(`Erro ao pesquisar os produtos. ${erro.message}`);
        }
            
    }

    /**
     * Método para pesquisar produto por nome ou código
     */
    public find = (req: Request, res: Response) => {
        
        if(req.params.param=='nome') {
            req.params.nome = req.params.value;
            return this.findByNome(req, res)
        } else if(req.params.param=='codigo') {
            req.params.codigo = req.params.value;
            return this.findByCodigo(req, res)
        }
            
    }

    /**
     * Pesquisa produto por nome
     */
    private findByNome = (req: Request, res: Response) => {
       
        try{
        
            this.nomeValidate(req.params);

            this.produtoService.getByNome(req.params.nome)
            .then(produto => {
                if(!produto) {
                    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Produto não encontrado.');
                }
                return res.status(HttpStatus.OK).json(produto); 
            })
            .catch(erro => {throw erro})

        } catch (erro) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(`Erro ao pesquisar o produto. ${erro.message}`);
        }
        
    }

    /**
     * Pesquisa produto código
     */
    private findByCodigo = (req: Request, res: Response) => {
       
        try{
        
            this.codigoValidate(req.params);

            this.produtoService.getByCodigo(req.params.codigo)
            .then(produto => {
                if(!produto) {
                    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Produto não encontrado.');
                }
                return res.status(HttpStatus.OK).json(produto); 
            })
            .catch(erro => {throw erro})

        } catch (erro) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(`Erro ao pesquisar o produto. ${erro.message}`);
        }

    }

    /**
     * Converter objeto body do request para uma entidade produto para persistência
     * @param bodyRequest Objeto body do request contendo os campos do formulário
     */
    private parseProdutoEntity(bodyRequest: any): ProdutoEntity {
        
        let produtoEntity = new ProdutoEntity();
        
        this.codigoValidate(bodyRequest);
        this.nomeValidate(bodyRequest);
        this.precoValidate(bodyRequest);
        
        produtoEntity.codigo = bodyRequest.codigo;
        produtoEntity.nome = bodyRequest.nome;
        produtoEntity.preco = parseInt(bodyRequest.preco.trim());

        return produtoEntity;
        
    }

    /**
     * Validar campo codigo
     * @param bodyRequest Objeto body do request contendo o campo codigo do formulário ou da query string
     */
    private codigoValidate(bodyRequest: any): void {
        if(!bodyRequest.codigo)
            throw new Error('O código não foi encontrado.'); 
    }

    /**
     * validar campo nome
     * @param bodyRequest Objeto body do request contendo o campo nome do formulário ou da query string
     */
    private nomeValidate(bodyRequest: any): void {
        if(!bodyRequest.nome)
            throw new Error('O nome não foi encontrado.'); 
    }

    /**
     * Validar campo preco
     * @param bodyRequest Objeto body do request contendo o campo preco do formulário ou da query string
     */
    private precoValidate(bodyRequest: any): void {
        if(!bodyRequest.preco)
            throw new Error('O preço não foi encontrado.'); 
    }

}

