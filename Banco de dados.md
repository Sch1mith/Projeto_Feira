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
    endereco varchar(80) not null
);

CREATE table lixo (
    id int not null primary KEY AUTO_INCREMENT,
    tipo varchar(17) not null,
    nome varchar(250) not null
);

google maps api snippnets --> https://console.cloud.google.com/google/maps-apis/build;filters=%7B"platformFilters":%5B"WEB"%5D,"useCaseFilters":%5B"CURRENT_LOCATION","VISUALIZE_DATA"%5D,"codeTypeFilters":%5B%5D%7D?hl=pt-br&project=projeto-feira-439802

//color pallets
https://colorhunt.co/palette/fff7d1ffecc8ffd09bffb0b0
bege rosa

https://colorhunt.co/palette/1a363640534c677d6ad6bd98
bege verde    

https://colorhunt.co/palette/e4c59eaf8260803d3b322c2b
bege marrom
