/**
 * Configuração de extensão
 */
let extension: string = 'js';
console.log("Ambiente: "+process.env.NODE_ENV);
if(process.env.NODE_ENV == 'development') {
  extension = 'js';
} else {
    extension = 'ts';
}
module.exports = () => require(`../env/${ process.env.NODE_ENV }.env.${extension}`);