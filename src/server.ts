import * as http from 'http';
import * as bcrypt from 'bcrypt';
import Api from './Api'
import sequelize from './Db';
const config = require('./config/env/config')();
const server = http.createServer(Api);

/**
 * Inicializa o servidor após configurar e conectar o Banco
 */
sequelize.sync({force:false})
    .then(() => {
        
        console.log("Sincronização do banco de dados realizada.");
        
        server.listen(config.serverPort);
        server.on('listening', () => console.log(`Servidor HTTP iniciado na porta ${config.serverPort}`))
        server.on('error', (error: NodeJS.ErrnoException) => console.log(`Ocorreu um erro: ${error}`));

    })
    .catch(error=> {
        console.log(error);
    })


  