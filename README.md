# Título

API para manipular produtos da loja e obter informações de vendas. 

## Documentação

/documentacao

## Início

Esse projeto deve ser executado em ambiente local para fins de desenvolvimento de API Node.

### Pré-requisitos

Node 9 ou superior, Express 4 e Mysql 5.7.

### Instalação

Node: https://nodejs.org
Mysql: https://www.mysql.com

É necessário conexão de internet para realizar a instalação dos módulos Node (declarados no package.json).
Console Node:
```
npm install
```

O Dump do banco de dados estão no diretório '/mysql/dump.sql' do projeto. Não há criação de tabelas no arquivo. Durante o inicio do serviço (via Gulp), as tabelas serão geradas conforme decorators definidos nos models.

## Iniciando o serviço HTTP
 
O comando abaixo inicia os serviços HTTP, build do projeto  (Javascript) no diretório '/dist' e documentação no diretório '/documentacao'.
Console Node:
```
gulp
```
O serviço HTTP utiliza a porta 3000 (http://localhost:3000).

Obs: Durante o processo do Gulp será exibida uma lista de warning. É apenas um alerta de incompatibilidade com os decorators (definidos nos models), não impacta nas funcionalidades da API.

## Autor

Leonardo Ramos
leoramos.net@gmail.com
