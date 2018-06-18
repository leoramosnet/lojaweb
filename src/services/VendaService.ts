import * as Promise from "bluebird";
import sequelize from '../Db';
import { Venda } from "../models/Venda";

/**
 * Classe de serviço para venda
 */
export class VendaService {

    constructor() {

    }

    public getListByLoja(idLoja: number): Promise<any> {
        let sql = "select p.nome as nome_produto, sum(p.preco) as total_venda";
              sql += " from venda_produto vp ";
              sql += " inner join lojaweb.venda v on v.id=vp.idVenda ";
              sql += " inner join lojaweb.loja l on l.id=v.id_loja ";
              sql += " inner join lojaweb.produto p on p.id=vp.idProduto ";
              sql += " where l.id= :idLoja ";
              sql += "group by p.nome ";
              sql+= " order by p.nome ";
        return sequelize.query(sql, {replacements: { idLoja: idLoja }, type: sequelize.QueryTypes.SELECT} );

    }

    public getListByCidade(idCidade: number): Promise<any> {

        let sql = "select c.nome as cidade, p.nome as nome_produto, sum(p.preco) as total_venda ";
            sql += " from lojaweb.venda_produto vp ";
            sql += " inner join lojaweb.venda v on v.id=vp.idVenda ";
            sql += " inner join lojaweb.loja l on l.id=v.id_loja ";
            sql += " inner join lojaweb.produto p on p.id=vp.idProduto ";
            sql += " inner join lojaweb.cidade c on c.id=l.idCidade ";
            sql += " where c.id= :idCidade ";
            sql += " group by c.nome, p.nome ";
            sql += " order by c.nome, p.nome ";

        return sequelize.query(sql, {replacements: { idCidade: idCidade }, type: sequelize.QueryTypes.SELECT} );

    }

    public getListByEstado(idEstado: number): Promise<any> {
        let sql = "select e.sigla as sigla, p.nome as nome_produto, sum(p.preco) as total_venda ";
            sql += " from lojaweb.venda_produto vp ";
            sql += " inner join lojaweb.venda v on v.id=vp.idVenda ";
            sql += " inner join lojaweb.loja l on l.id=v.id_loja ";
            sql += " inner join lojaweb.produto p on p.id=vp.idProduto ";
            sql += " inner join lojaweb.cidade c on c.id=l.idCidade ";
            sql += " inner join lojaweb.estado e on e.id=c.idEstado"
            sql += " where e.id= :idEstado ";
            sql += " group by e.sigla, p.nome ";
            sql += " order by e.sigla, p.nome ";

        return sequelize.query(sql, {replacements: { idEstado: idEstado }, type: sequelize.QueryTypes.SELECT} );
    }

   
}