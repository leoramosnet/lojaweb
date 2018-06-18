import { Table, Model, PrimaryKey, DataType, Column, AllowNull, AutoIncrement, BelongsTo, Scopes, BelongsToMany, CreatedAt } from 'sequelize-typescript';
import { Venda } from './Venda';
import { VendaProduto } from './VendaProduto';

@Scopes({
    full:{
        attributes: [
            'codigo', 
            'nome',
            'data',
            'preco' 
        ]
    },
    vendas: {
        attributes: [
            'codigo', 
            'nome',
            'data',
            'preco' 
        ]
    }
})

@Table({
    timestamps: true,
    updatedAt: false,
    tableName: "produto"
})

/**
 * Classe que representa o produto
 */
export class Produto extends Model<Produto> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    @Column(DataType.TEXT)
    codigo: string;

    @Column(DataType.TEXT)
    nome: string;

    @CreatedAt
    @Column(DataType.DATE)
    data: Date;

    @Column(DataType.INTEGER)
    preco: number;

    @BelongsToMany(()=> Venda, ()=> VendaProduto)
    vendas: Venda[];

}