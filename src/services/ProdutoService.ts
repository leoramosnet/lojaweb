import * as Promise from "bluebird";
import { Produto } from './../models/Produto'
import { ProdutoEntity } from './../entity/ProdutoEntity'

/**
 * Classe de serviço para produto
 */
export class ProdutoService {

    constructor() {

    }

    /**
     * Serviço para buscar um produto por nome
     * @param nome Nome do produto 
     * @returns Retorna uma Promise com dados de produto
     */
    public getByNome(nome: string): Promise<Produto> {
        return Produto.scope('full').findOne<Produto>({
            where: {nome: nome}
        });
    }

    /**
     * Serviço para buscar um produto por código
     * @param codigo Codigo do produto 
     * @returns Retorna uma Promise com dados de produto
     */
    public getByCodigo(codigo: string): Promise<Produto> {
        return Produto.scope('full').findOne<Produto>({
            where: {codigo: codigo}
        });
    }

     /**
     * Serviço para listar os últimos 10 produtos
     * @returns Retorna uma Promise com os últimos 10 produtos
     */
    public getAll(): Promise<Produto[]> {
        return Produto.scope('full').findAll<Produto>({limit: 10, order: [ ['data','desc'] ]});
    }

    /**
     * Serviço para salvar um produto
     * @returns Retorna uma Promise com produto salvo
     */
    create(produtoEntity: ProdutoEntity): Promise<Produto> {
        return Produto.build(produtoEntity).save();
    }

    /**
     * Serviço para salvar um produto
     * @returns Retorna uma Promise com produto salvo
     */
    update(produtoEntity: ProdutoEntity): Promise<[number, Produto[]]> {
        return Produto.update(produtoEntity, { where: {codigo: produtoEntity.codigo} });
    }

    /**
     * Serviço para deletar um produto
     * @returns Retorna uma promise com a quantidade de registros deletados
     */
    remove(codigo: string): Promise<number> {
        return Produto.destroy({ where: {codigo: codigo} });
    }

}