CREATE DATABASE `lojaweb` /*!40100 DEFAULT CHARACTER SET latin1 */;

-- ESTADOS
INSERT INTO `lojaweb`.`estado`(`sigla`,`nome`) VALUES ('RJ','Rio de Janeiro');
INSERT INTO `lojaweb`.`estado`(`sigla`,`nome`) VALUES ('SP','São Paulo');
INSERT INTO `lojaweb`.`estado`(`sigla`,`nome`) VALUES ('RS','Rio Grande do Sul');
INSERT INTO `lojaweb`.`estado`(`sigla`,`nome`) VALUES ('AM','Amazonas');
INSERT INTO `lojaweb`.`estado`(`sigla`,`nome`) VALUES ('MG','Minas Gerais');

-- CIDADES
INSERT INTO `lojaweb`.`cidade`(`nome`,`idEstado`) VALUES ('Rio de Janeiro',1);
INSERT INTO `lojaweb`.`cidade`(`nome`,`idEstado`) VALUES ('Angra dos Reis',1);
INSERT INTO `lojaweb`.`cidade`(`nome`,`idEstado`) VALUES ('Macaé',1);

INSERT INTO `lojaweb`.`cidade`(`nome`,`idEstado`) VALUES ('São Paulo',2);
INSERT INTO `lojaweb`.`cidade`(`nome`,`idEstado`) VALUES ('Campinas',2);
INSERT INTO `lojaweb`.`cidade`(`nome`,`idEstado`) VALUES ('Ribeirão Preto',2);

INSERT INTO `lojaweb`.`cidade`(`nome`,`idEstado`) VALUES ('Porto Alegre',3);
INSERT INTO `lojaweb`.`cidade`(`nome`,`idEstado`) VALUES ('Gramado',3);
INSERT INTO `lojaweb`.`cidade`(`nome`,`idEstado`) VALUES ('Novo Hamburgo',3);

INSERT INTO `lojaweb`.`cidade`(`nome`,`idEstado`) VALUES ('Manaus',4);
INSERT INTO `lojaweb`.`cidade`(`nome`,`idEstado`) VALUES ('Borba',4);
INSERT INTO `lojaweb`.`cidade`(`nome`,`idEstado`) VALUES ('Jutaí',4);

INSERT INTO `lojaweb`.`cidade`(`nome`,`idEstado`) VALUES ('Belo Horizonte',5);
INSERT INTO `lojaweb`.`cidade`(`nome`,`idEstado`) VALUES ('Ouro Preto',5);
INSERT INTO `lojaweb`.`cidade`(`nome`,`idEstado`) VALUES ('São João Del Rey',5);

-- PRODUTOS
INSERT INTO `lojaweb`.`produto` (`codigo`,`nome`,`data`,`preco`) VALUES ('c100','bermuda jeans',now(),50);
INSERT INTO `lojaweb`.`produto` (`codigo`,`nome`,`data`,`preco`) VALUES ('c101','calça jeans',now(),150);
INSERT INTO `lojaweb`.`produto` (`codigo`,`nome`,`data`,`preco`) VALUES ('c102','camisa preta',now(),30);
INSERT INTO `lojaweb`.`produto` (`codigo`,`nome`,`data`,`preco`) VALUES ('c103','bermuda branca',now(),60);
INSERT INTO `lojaweb`.`produto` (`codigo`,`nome`,`data`,`preco`) VALUES ('c104','short jeans',now(),65);
INSERT INTO `lojaweb`.`produto` (`codigo`,`nome`,`data`,`preco`) VALUES ('c105','jaqueta jeans',now(),200);
INSERT INTO `lojaweb`.`produto` (`codigo`,`nome`,`data`,`preco`) VALUES ('c106','camisa manga comprida',now(),90);
INSERT INTO `lojaweb`.`produto` (`codigo`,`nome`,`data`,`preco`) VALUES ('c107','boné vermelho',now(),20);

-- LOJAS
INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja 1 Rio Capital',1);
INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja 2 Rio Capital',1);
INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja 3 Rio Capital',1);
INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja 4 Rio Capital',1);
INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja Angra',2);
INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja RLagos',3);

INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja Sampa 1',4);
INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja Sampa 2',4);
INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja Sampa 3',4);
INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja Sampa 4',4);
INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja Sampa 5',4);
INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja Sampa 6',4);

INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja SP 1',5);
INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja Sampa 2',5);
INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja Sampa 3',6);

INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja Rio Grande I',7);
INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja Rio Grande II',8);
INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja Rio Grande III',9);

INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja Maravilha',10);
INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja Floresta',11);
INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja Amazonas',12);

INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja Belô',13);
INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja Ouro',14);
INSERT INTO `lojaweb`.`loja` (`nome`,`idCidade`) VALUES ('Loja Estrada Real',15);

-- VENDAS
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 1 para os fornecedores do Rio ', 1);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 2 para os fornecedores do Rio', 1);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 3 para os fornecedores do Rio', 1);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 4 para os fornecedores do Rio', 1);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 5 para os fornecedores do Rio', 2);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 6 para os fornecedores do Rio', 2);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 7 para os fornecedores do Rio', 3);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 8 para os fornecedores do Rio', 3);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 9 para os fornecedores do Rio', 3);

INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 10 para os fornecedores de Rio', 4);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 11 para os fornecedores de Rio', 4);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 12 para os fornecedores de Rio', 4);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 13 para os fornecedores de Rio', 5);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 14 para os fornecedores de Rio', 6);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 15 para os fornecedores de Rio', 6);

INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 1 para os fornecedores de Sampa', 7);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 2 para os fornecedores de Sampa', 7);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 3 para os fornecedores de Sampa', 8);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 4 para os fornecedores de Sampa', 8);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 5 para os fornecedores de Sampa', 9);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 6 para os fornecedores de Sampa', 10);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 7 para os fornecedores de Sampa', 11);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 8 para os fornecedores de Sampa', 12);

INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 1 para os fornecedores de RS', 16);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 2 para os fornecedores de RS', 17);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 3 para os fornecedores de RS', 17);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 4 para os fornecedores de RS', 18);

INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 1 para os fornecedores de AM', 19);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 2 para os fornecedores de AM', 19);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 3 para os fornecedores de AM', 19);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 4 para os fornecedores de AM', 20);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 5 para os fornecedores de AM', 21);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 6 para os fornecedores de AM', 21);

INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 1 para os fornecedores de MG', 22);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 2 para os fornecedores de MG', 22);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 3 para os fornecedores de MG', 23);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 4 para os fornecedores de MG', 23);
INSERT INTO `lojaweb`.`venda` (`descricao`,`id_loja`) VALUES ('Venda 5 para os fornecedores de MG', 24);


INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (1,1);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (1,3);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (1,5);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (1,8);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (2,1);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (2,4);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (2,6);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (3,2);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (3,3);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (3,7);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (4,2);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (4,3);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (4,8);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (5,1);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (5,3);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (5,4);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (5,5);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (6,2);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (6,3);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (6,4);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (6,6);

INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (7,1);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (7,3);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (8,5);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (9,8);

INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (10,1);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (11,3);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (11,5);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (11,8);

INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (12,1);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (12,3);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (12,5);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (13,8);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (14,1);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (14,3);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (15,5);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (16,8);

INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (17,1);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (17,3);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (18,5);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (18,8);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (18,1);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (19,3);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (20,5);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (21,8);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (22,1);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (22,3);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (23,5);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (23,8);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (24,1);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (25,3);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (26,5);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (27,8);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (27,1);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (28,3);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (29,5);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (30,8);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (31,1);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (31,3);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (32,5);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (33,8);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (34,1);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (35,3);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (36,5);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (36,8);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (37,1);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (37,3);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (38,5);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (38,8);
INSERT INTO `lojaweb`.`venda_produto`(`idVenda`,`idProduto`) VALUES (38,1);