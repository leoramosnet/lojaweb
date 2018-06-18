import { Application, Request, Response } from 'express';
import { AutenticacaoController } from './../controllers/AutenticacaoController';
import { ProdutoController } from '../controllers/ProdutoController';
import { VendaController } from '../controllers/VendaController';

/**
 * Classe que define as rotas da API
 */
class Routes {
    
    /**
     * Controle da autenticação
     */
    private autenticacaoController: AutenticacaoController;
    
    /**
     * Controle do produto
     */
    private produtoController: ProdutoController;

    /**
     * Controle do produto
     */
    private vendaController: VendaController;
    
    constructor() {        
        this.autenticacaoController = new AutenticacaoController();
        this.produtoController = new ProdutoController();
        this.vendaController = new VendaController();
    }
    
    /**
     * 
     * @param app: Definição das rotas da API
     */
    public initRoutes(app: Application): void {

        /**
         * Rota para login
         */
        app.route('/login').post(this.autenticacaoController.login);

        /**
         * Rota para listar os 10 últimos produtos
         */
        app.route('/produtos/').get(this.produtoController.findAll);

        /**
         * Rota para encontrar um produto por codigo ou nome 
         */
        app.route('/produtos/:param/:value').get(this.produtoController.find);
        
        /**
         * Rota para cadastrar um produto
         */
        app.route('/produtos').post(this.produtoController.create);
        
        /**
         * Rota para excluir um produto
         */
        app.route('/produtos').delete(this.produtoController.delete);
        
        /**
         * Rota para listar 
         */
        app.route('/vendas/:param/:value').get(this.vendaController.find);

    }

}

export default new Routes();