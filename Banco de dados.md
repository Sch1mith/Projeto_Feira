# Banco de dados od projeto (pode ser alterado)

CREATE DATABASE Projeto;


CREATE table tbpoint (
    id int not null primary KEY AUTO_INCREMENT,
    nome varchar(50) not null,
    tipo_lixo varchar(40) not null,
    UF varchar(2) not null,
    cidade varchar(30) not null,
    bairro varchar(30) not null,
    endereco varchar(80) not null);
