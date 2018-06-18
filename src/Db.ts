import {Sequelize} from 'sequelize-typescript';
const config = require('./config/env/config')();

/**
 * Classe que inicia as configuração do banco de dados (Sequelize)
 */
class Db {

    public sequelize: Sequelize;

    constructor() {
        const params = {
            name: config.db,
            dialect: config.dialect,
            host: config.host,
            port: config.dbPort,
            username: config.username,
            password: config.password,
            modelPaths: [`${__dirname}/models`]
        }

        this.sequelize = new Sequelize(params);

    }

}

export default new Db().sequelize;

