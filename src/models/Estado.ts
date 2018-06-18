import { Table, Model, PrimaryKey, DataType, Column, AllowNull, AutoIncrement, BelongsTo, Scopes, BelongsToMany, HasMany } from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: "estado"
})

/**
 * Classe que representa o estado (UF)
 */
export class Estado extends Model<Estado> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    @Column(DataType.TEXT)
    sigla: string;

    @Column(DataType.TEXT)
    nome: string;

}