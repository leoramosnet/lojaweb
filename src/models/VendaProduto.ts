import { Table, Model, PrimaryKey, DataType, Column, AllowNull, AutoIncrement, BelongsTo, Scopes, BelongsToMany, ForeignKey } from 'sequelize-typescript';
import { Venda } from './Venda';
import { Produto } from './Produto';


@Table({
    timestamps: false,
    tableName: "venda_produto"
})

/**
 * Classe que representa o produto
 */
export class VendaProduto extends Model<VendaProduto> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    @ForeignKey(() => Venda)
    @Column(DataType.INTEGER)
    idVenda: number;
 
    @ForeignKey(() => Produto)
    @Column(DataType.INTEGER)
    idProduto: number;

}