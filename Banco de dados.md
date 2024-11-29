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

INSERT INTO lixo (nome, tipo)
VALUES 
    ('Restos de comida', 'lixo_organico'),
    ('Papelão', 'lixo_reciclavel'),
    ('Garrafas PET', 'lixo_reciclavel'),
    ('Folhas secas', 'lixo_verde'),
    ('Baterias', 'lixo_perigoso'),
    ('Resíduos eletrônicos', 'lixo_eletronico'),
    ('Vidros quebrados', 'lixo_reciclavel'),
    ('lata de refrigerante', 'lixo_reciclavel'),
    ('vidro de perfume', 'lixo_reciclavel'),
    ('sacola plástica', 'lixo_reciclavel'),
    ('jornal velho', 'lixo_reciclavel'),
    ('tampa de garrafa', 'lixo_reciclavel'),
    ('pote de iogurte', 'lixo_reciclavel'),
    ('grama cortada', 'lixo_verde'),
    ('galhos de árvore', 'lixo_verde'),
    ('flores murchas', 'lixo_verde'),
    ('restos de poda', 'lixo_verde'),
    ('cascas de frutas', 'lixo_verde'),
    ('legumes estragados', 'lixo_verde'),
    ('plantas mortas', 'lixo_verde'),
    ('raízes de plantas', 'lixo_verde'),
    ('ervas daninhas', 'lixo_verde'),
    ('celular velho', 'lixo_eletrônico'),
    ('carregador quebrado', 'lixo_eletrônico'),
    ('bateria de notebook', 'lixo_eletrônico'),
    ('teclado antigo', 'lixo_eletrônico'),
    ('mouse quebrado', 'lixo_eletrônico'),
    ('monitor LCD', 'eletrônico'),
    ('televisão antiga', 'eletrônico'),
    ('impressora usada', 'eletrônico'),
    ('rádio portátil', 'eletrônico'),
    ('fone de ouvido', 'eletrônico'),
    ('tablet quebrado', 'eletrônico'),
    ('caixa de som antiga', 'eletrônico'),
    ('câmera digital velha', 'eletrônico'),
    ('console de videogame', 'eletrônico'),
    ('controle remoto', 'eletrônico'),
    ('micro-ondas quebrado', 'eletrônico'),
    ('notebook antigo', 'eletrônico'),
    ('cabo HDMI', 'eletrônico'),
    ('pendrive danificado', 'eletrônico'),
    ('relógio digital', 'eletrônico')



    


    

google maps api snippnets --> https://console.cloud.google.com/google/maps-apis/build;filters=%7B"platformFilters":%5B"WEB"%5D,"useCaseFilters":%5B"CURRENT_LOCATION","VISUALIZE_DATA"%5D,"codeTypeFilters":%5B%5D%7D?hl=pt-br&project=projeto-feira-439802

//color pallets
https://colorhunt.co/palette/fff7d1ffecc8ffd09bffb0b0
bege rosa

https://colorhunt.co/palette/1a363640534c677d6ad6bd98
bege verde    

https://colorhunt.co/palette/e4c59eaf8260803d3b322c2b
bege marrom
