import { Table, Model, PrimaryKey, DataType, Column, AllowNull, AutoIncrement, BelongsTo, Scopes, BelongsToMany } from 'sequelize-typescript';
import { Produto } from './Produto';
import { VendaProduto } from './VendaProduto';


@Table({
    timestamps: false,
    tableName: "venda"
})

/**
 * Classe que representa a venda
 */
export class Venda extends Model<Venda> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    @Column(DataType.TEXT)
    descricao: string;

    @BelongsToMany(()=> Produto, ()=> VendaProduto)
    produtos: Produto[];

}