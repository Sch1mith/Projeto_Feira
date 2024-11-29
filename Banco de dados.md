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
    ('celular velho', 'lixo_eletronico'),
    ('carregador quebrado', 'lixo_eletronico'),
    ('bateria de notebook', 'lixo_eletronico'),
    ('teclado antigo', 'lixo_eletronico'),
    ('mouse quebrado', 'lixo_eletronico'),
    ('monitor LCD', 'lixo_eletronico'),
    ('televisão antiga', 'lixo_eletronico'),
    ('impressora usada', 'lixo_eletronico'),
    ('rádio portátil', 'lixo_eletronico'),
    ('fone de ouvido', 'lixo_eletronico'),
    ('tablet quebrado', 'lixo_eletronico'),
    ('caixa de som antiga', 'lixo_eletronico'),
    ('câmera digital velha', 'lixo_eletronico'),
    ('console de videogame', 'lixo_eletronico'),
    ('controle remoto', 'lixo_eletronico'),
    ('micro-ondas quebrado', 'lixo_eletronico'),
    ('notebook antigo', 'lixo_eletronico'),
    ('cabo HDMI', 'lixo_eletronico'),
    ('pendrive danificado', 'lixo_eletronico'),
    ('relógio digital', 'lixo_eletronico'),
    ('agulha usada', 'lixo_perigoso'),
    ('seringa descartada', 'lixo_perigoso'),
    ('luvas de látex', 'lixo_perigoso'),
    ('máscara cirúrgica', 'lixo_perigoso'),
    ('bolsa de sangue', 'lixo_perigoso'),
    ('medicamento vencido', 'lixo_perigoso'),
    ('frasco de medicamento', 'lixo_perigoso'),
    ('fita de curativo usada', 'lixo_perigoso'),
    ('algodão com sangue', 'lixo_perigoso'),
    ('lâmina de bisturi', 'lixo_perigoso'),
    ('termômetro de mercúrio', 'lixo_perigoso'),
    ('tubo de ensaio contaminado', 'lixo_perigoso'),
    ('material radioativo', 'lixo_perigoso'),
    ('lâmpada fluorescente', 'lixo_perigoso'),
    ('bateria de carro', 'lixo_perigoso'),
    ('óleo de motor usado', 'lixo_perigoso'),
    ('lata de tinta', 'lixo_perigoso'),
    ('pó químico de extintor', 'lixo_perigoso'),
    ('sacos com resíduos biológicos', 'lixo_perigoso'),
    ('esparadrapo usado', 'lixo_perigoso'),
    ('embalagem de shampoo', 'lixo_reciclavel'),
    ('caixa de leite', 'lixo_reciclavel'),
    ('pote de sorvete', 'lixo_reciclavel'),
    ('caixa de ovos de papelão', 'lixo_reciclavel'),
    ('tubo de papel higiênico', 'lixo_reciclavel'),
    ('saco de papel', 'lixo_reciclavel'),
    ('canudo de plástico', 'lixo_reciclavel'),
    ('garrafa de vidro transparente', 'lixo_reciclavel'),
    ('pote de creme dental', 'lixo_reciclavel'),
    ('embalagem de margarina', 'lixo_reciclavel'),
    ('lata de tinta limpa', 'lixo_reciclavel'),
    ('folha de alumínio limpa', 'lixo_reciclavel'),
    ('copo descartável de plástico', 'lixo_reciclavel'),
    ('embalagem de plástico bolha', 'lixo_reciclavel'),
    ('frascos de produtos de limpeza', 'lixo_reciclavel'),
    ('tampas plásticas de garrafas', 'lixo_reciclavel'),
    ('latinha de comida enlatada', 'lixo_reciclavel'),
    ('garrafa de água mineral', 'lixo_reciclavel'),
    ('recipiente de vidro colorido', 'lixo_reciclavel'),
    ('sacola de papel kraft', 'lixo_reciclavel');






    


    

google maps api snippnets --> https://console.cloud.google.com/google/maps-apis/build;filters=%7B"platformFilters":%5B"WEB"%5D,"useCaseFilters":%5B"CURRENT_LOCATION","VISUALIZE_DATA"%5D,"codeTypeFilters":%5B%5D%7D?hl=pt-br&project=projeto-feira-439802

//color pallets
https://colorhunt.co/palette/fff7d1ffecc8ffd09bffb0b0
bege rosa

https://colorhunt.co/palette/1a363640534c677d6ad6bd98
bege verde    

https://colorhunt.co/palette/e4c59eaf8260803d3b322c2b
bege marrom
