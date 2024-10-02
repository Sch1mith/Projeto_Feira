# Banco de dados od projeto (pode ser alterado)

CREATE DATABASE projeto;


CREATE table ecoponto (
    id int not null primary KEY AUTO_INCREMENT,
    nome varchar(50),
    telefone varchar (11),
    tipo_lixo varchar(250) not null,
    UF varchar(2) not null,
    cidade varchar(30) not null,
    bairro varchar(30) not null,
    cep varchar(9)not null,
    endereco varchar(80) not null);
