/**
 * Parametros do banco de dados, HTTP e Token (se houver)
 * Ambiente: Desenvolvimento
 */
module.exports = {
    env: 'development',
    db: 'lojaweb',
    dialect: 'mysql',
    username: 'loja',
    password: '12345',
    host: 'localhost',
    dbPort: 3306,
    dbUrl: '',
    serverPort: 3000,
    secret: 'qwert'
}
