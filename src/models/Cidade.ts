import { Table, Model, PrimaryKey, DataType, Column, AllowNull, AutoIncrement, BelongsTo, Scopes, BelongsToMany, HasMany } from 'sequelize-typescript';
import { Estado } from './Estado';

@Table({
    timestamps: false,
    tableName: "cidade"
})

/**
 * Classe que representa a cidade
 */
export class Cidade extends Model<Cidade> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    @Column(DataType.TEXT)
    nome: string;

    @BelongsTo(() => Estado, 'idEstado')
    estado: Estado;

}