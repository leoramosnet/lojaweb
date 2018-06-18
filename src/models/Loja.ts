import { Table, Model, PrimaryKey, DataType, Column, AllowNull, AutoIncrement, BelongsTo, Scopes, BelongsToMany, HasMany } from 'sequelize-typescript';
import { Venda } from './Venda';
import { Produto } from './Produto';
import { Cidade } from './Cidade';

@Scopes({
    full:{
        attributes: [
            'nome',
            'cidade',
            'uf'
        ],
        include: [
            {
                model: () => Venda,
                    attributes: [
                        'id',
                        'descricao'
                    ]
            }
        ]
    }
})

@Table({
    timestamps: false,
    tableName: "loja"
})

/**
 * Classe que representa a loja
 */
export class Loja extends Model<Loja> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    @Column(DataType.TEXT)
    nome: string;

    @BelongsTo(() => Cidade, 'idCidade')
    cidade: Cidade;

    @HasMany(() => Venda, 'id_loja')
    vendas: Venda[];

}