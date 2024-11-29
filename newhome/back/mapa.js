const markersData = [
    { position: { lat: -23.588202270006775, lng: -46.50891444666432 }, address: "EcoPonto Nova York ,R. Olivia Trindade Pinto - Jardim das Rosas (Zona Leste I), São Paulo - SP, 03909-060 " },
    { position: { lat: -23.536933500938847, lng: -46.54732720328706 }, address: " Ecoponto Viaduto Eng.° Alberto Badra, Av. Aricanduva, 200 - Vila California, São Paulo - SP, 03501-010" },
    { position: { lat: -23.595336278464497, lng: -46.746721567449015 }, address: "Ecoponto Jardim Maria do Carmo, R. Caminho do Engenho, 800 - Ferreira, São Paulo - SP, 05524-000" },
    { position: { lat: -23.59933708473178, lng: -46.72142897815588 }, address: "Ecoponto Giovani Gronchi, Av. Giovanni Gronchi, 3413 - Morumbi, São Paulo - SP, 05651-002" },
    { position: { lat: -23.5876375495963, lng: -46.75457031516011 }, address: "Ecoponto Jardim Jaqueline, Unnamed Road - Jardim Raposo Tavares" },
    { position: { lat: -23.575190447869854, lng: -46.7652718295265 }, address: "Ecoponto Politécnica, Rua Paulino Baptista Conti - Vila Antonio, São Paulo - SP, 05382-140" },
    { position: { lat: -23.633903872128812, lng: -46.758006055669306 }, address: "Ecoponto Olinda, R. Nelson Brissac, 1235 - Parque Regina, São Paulo - SP, 05778-180" },
    { position: { lat: -23.663817270534135, lng: -46.7768412096711 }, address: "Ecoponto Santo Dias, R. Rosifloras, 301 - Conj. Hab. Instituto Adventista, São Paulo - SP, 05868-600" },
    { position: { lat: -23.671847400726445, lng: -46.792269154125286 }, address: "Ecoponto Parque Fernanda, Av. Dr. Salvador Rocco, 400 - Parque Fernanda, São Paulo - SP, 05889-230" },
    { position: { lat: -23.638087235015828, lng: -46.74160616625145 }, address: "Ecoponto Vila das Belezas, R. Campo Novo do Sul, 500 - Vila Andrade, São Paulo - SP, 05729-100" },
    { position: { lat: -23.62296949163627, lng: -46.725190233973386 }, address: "Ecoponto Paraisópolis, R. Irapará, 73 - Paraíso do Morumbi, São Paulo - SP, 05706-300" },
    { position: { lat: -23.66194264912046, lng: -46.72253234746301 }, address: "Ecoponto Cidade Saudavel, R. Ptolomeu, 869 - Vila Socorro, São Paulo - SP, 04762-040" },
    { position: { lat: -23.491604620422823, lng: -46.65578802916724 }, address: "Ecoponto Parque Peruche, Av. Eng. Caetano Álvares, 3142 - Limão, São Paulo - SP, 02535-008" },
    { position: { lat: -23.47202987539443, lng: -46.66987454747133 }, address: "Ecoponto Vila Nova Cachoeirinha, Av. Félix Alves Pereira, 113 - Vila Nova Cachoeirinha, São Paulo - SP, 02882-030" },
    { position: { lat: -23.49373617439376, lng: -46.67151110328913 }, address: "Ecoponto Vila Santa Maria, R. André Bolsena - Vila Santista, São Paulo - SP, 02560-220" },
    { position: { lat: -23.454648073961202, lng: -46.6595213186357 }, address: "Ecoponto jardim Antártica, R. Dom Aquino, 309 - Jardim Antartica, São Paulo - SP, 02652-170" },
    { position: { lat: -23.695239091806464, lng: -46.65165010698778 }, address: "Ecoponto Cupecê, R. Anália Maria de Jesus, 131 - Jardim Itacolomi, São Paulo - SP, 04385-090" },
    { position: { lat: -23.57358555752143, lng: -46.40015877711881 }, address: "Ecoponto Inácio Monteiro, R. Regresso Feliz, 1190 - Conj. Hab. Inacio Monteiro, São Paulo - SP, 08472-210" },
    { position: { lat: -23.592967758674053, lng: -46.41552425488143 }, address: "Ecoponto Nascer do Sol, Rua Nascer do Sol, 356 - Conj. Hab. Santa Etelvina II, São Paulo - SP, 08485-290" },
    { position: { lat: -23.58603846281423, lng: -46.39648454746625 }, address: "Ecoponto Barro Branco, R. Alfonso Asturaro, 733 - Conj. Hab. Barro Branco II, São Paulo - SP, 08473-591" },
    { position: { lat: -23.50317048776799, lng: -46.48442473212468 }, address: "Ecoponto Boturussu, R. Nélio Batista Guimarães, 174 - Parque Boturussu, São Paulo - SP, 03802-005" },
    { position: { lat: -23.523114755394708, lng: -46.48286428246718 }, address: "Ecoponto Jardim São Nicolau, R. Agreste de Itabaiana, 590 - Jardim Artur Alvim, São Paulo - SP, 03685-110" },
    { position: { lat: -23.46972260147551, lng: -46.67497664932527 }, address: "Ecoponto Vila Rica, R. Jorge Mamede da Silva, 200 - Vila Rica, São Paulo - SP, 02860-120" },
    { position: { lat: -23.50557903045723, lng: -46.70446334746972 }, address: "Ecoponto Freguesia do Ó, R. Souza Filho, 690 - Vila Arcadia, São Paulo - SP, 02911-040" },
    { position: { lat: -23.48597333967452, lng: -46.69529748942138 }, address: "Ecoponto Bandeirantes, R. Itaiquara, 237 - Parque Monteiro Soares, São Paulo - SP, 02802-070" },
    { position: { lat: -23.55507461639305, lng: -46.413001205140176 }, address: "Ecoponto Guaiaponto, R. da Passagem Funda, 250 - Centro Histórico de São Paulo, São Paulo - SP, 08411-010" },
    { position: { lat: -23.530495064342695, lng: -46.406099132123536 }, address: "Ecoponto Lajeado, R. Isabela, 405 - Lajeado, São Paulo - SP, 08440-520" },
    { position: { lat: -23.56529170138255, lng: -46.3983840763035 }, address: "Ecoponto Jardim São Paulo, R. Utaro Kanai, 374 - Conj. Hab. Juscelino Kubitscheck de Oliveira, São Paulo - SP, 08465-020" },
    { position: { lat: -23.568939169920576, lng: -46.608375089794464 }, address: "Ecoponto Tereza Cristina, Av. Teresa Cristina, 10 - Ipiranga, São Paulo - SP, 01552-020" },
    { position: { lat: -23.62368727346548, lng: -46.60563700513712 }, address: "Ecoponto Vila das Mercês, R. Italva, 86 - Vila Moraes, São Paulo - SP, 04160-005" },
    { position: { lat: -23.600023700773875, lng: -46.59691668237776 }, address: "Ecoponto Heliópolis, R. Comandante Taylor, 657 - Ipiranga, São Paulo - SP, 04218-000" },
    { position: { lat: -23.599603310298875, lng: -46.62329498979311 }, address: "Ecoponto Santa Cruz, R. Santa Cruz, 1452 - Vila Mariana, São Paulo - SP, 04122-001" },
    { position: { lat: -23.50821253339896, lng: -46.416811754579506 }, address: "Ecoponto Mãe Preta, Av. Dama Entre Verdes, 26-2 - Jardim dos Ipes, São Paulo - SP, 08030-610" },
    { position: { lat: -23.501023206295535, lng: -46.38938444746997 }, address: "Ecoponto Pesqueiro, R. Caiuás, 18 - Jardim Camargo Novo, São Paulo - SP, 08120-525" },
    { position: { lat: -23.51421674464596, lng: -46.42129053583215 }, address: "Ecoponto Flamingo, R. Alexandre Dias Nogueira, 353 - Vila Nova Curuca, São Paulo - SP, 08031-240" },
    { position: { lat: -23.497349340855838, lng: -46.37089356713524 }, address: "Ecoponto Moreira, Rua João Batista de Godoy, 1164 - Jardim Meliunas, São Paulo - SP, 08111-390" },
    { position: { lat: -23.520516329875175, lng: -46.42897610514164 }, address: "Ecoponto Curuça, R. Curuçá, 1700 - Vila Maria, São Paulo - SP, 02120-005" },
    { position: { lat: -23.56214192345951, lng: -46.49933106281246 }, address: "Ecoponto Cidade Líder, R. Charles Manguin, 1 - Jardim Marília, São Paulo - SP, 03579-150" },
    { position: { lat: -23.598915610324454, lng: -46.53447863397457 }, address: "Ecoponto São Lucas, R. Florêncio Sanches, 307 - Vila Prudente, São Paulo - SP, 03266-200" },
    { position: { lat: -23.5820846396294, lng: -46.5713374657739 }, address: "Ecoponto Anhaia Mello, R. da Prece, 313 - Vila Prudente, São Paulo - SP, 03156-210" },
    { position: { lat: -23.592701537868034, lng: -46.63497287815611 }, address: "Ecoponto Vila Mariana, R. Afonso Celso, 147 - Vila Mariana, São Paulo - SP, 04119-002" },
    { position: { lat: -23.594324493547887, lng: -46.622208047465925 }, address: "Ecoponto Saioá, R. Mary Baida Salem - Chácara Klabin, São Paulo - SP, 04116-120" },
    { position: { lat: -23.611560849889344, lng: -46.644525691646585 }, address: "Ecoponto Mirandópolis, Av. Senador Casemiro da Rocha, 1220 - Mirandópolis, São Paulo - SP, 04047-003" },
    { position: { lat: -23.485521778201115, lng: -46.56529320514317 }, address: "Ecoponto Vila Sabrina, Av. do Poeta - Jardim Julieta, São Paulo - SP, 02161-160" },
    { position: { lat: -23.516728761940627, lng: -46.58394190514184 }, address: "Vila Maria" },
    { position: { lat: -23.516948550797142, lng: -46.60042900514184 }, address: "Ecoponto Vila Guilherme, Rua José Bernardo Pinto, 1480 - Vila Guilherme, São Paulo - SP, 02055-001" },
    { position: { lat: -23.549460608484043, lng: -46.628390214469775 }, address: "Ecoponto Cambuci, Av. Dom Pedro I, 38 - Vila Monumento, São Paulo - SP, 01515-000" },
    { position: { lat: -23.524516408351626, lng: -46.642416730986504 }, address: "Ecoponto Barra Funda, R. Cônego Vicente Miguel Marino, 22 - Barra Funda, São Paulo - SP, 01135-020" },
    { position: { lat: -23.521116717755795, lng: -46.62777490514175 }, address: "Ecoponto Armênia, R. Gen. Carmona, 160 - Luz, São Paulo - SP, 01102-030" },
    { position: { lat: -23.555999600613532, lng: -46.6370930609588 }, address: "Ecoponto Liberdade, Rua Jaceguai, 67 - Liberdade, São Paulo - SP, 01315-010" },
    { position: { lat: -23.562055903723333, lng: -46.64587737922207 }, address: "Ecoponto Glicério, Liberdade, São Paulo - SP, 01517-100" },
    { position: { lat: -23.605383718839956, lng: -46.4969079628104 }, address: "Ecoponto Teotônio Vilela, R. Francesco Usper, 550 - Conj. Promorar Sapopemba, São Paulo - SP, 03927-310" },
    { position: { lat: -23.62330132442862, lng: -46.509238565788635 }, address: "Ecoponto Rua Oratório, R Oratório, 892 - Bangú, Santo André - SP, 09380-240" },
    { position: { lat: -23.50649631532205, lng: -46.46222602144665 }, address: "Ecoponto Pedro Nunes, R. da Polka, 100 - Jardim Pedro José Nunes, São Paulo - SP, 08061-540" },
    { position: { lat: -23.509906130003902, lng: -46.43280965567485 }, address: "Ecoponto Itaqueruna, R. Domitilia D'Abril - Cidade Nova São Miguel, São Paulo - SP, 08042-550" },
    { position: { lat: -23.490439881184873, lng: -46.39430931686644 }, address: "Carlópolis" },
    { position: { lat: -23.490439881184873, lng: -46.39430931686644 }, address: 'Eco ponto Carlito Maia, R. Domingos Fernandes Nobre, 109 - Vila Itaim, São Paulo - SP, 08190-390' },
    { position: { lat: -23.513893657927976, lng: -46.45669879192444 }, address: 'Ecoponto Imperador, Av. Ribeirão Jacu, 201 - Jardim Santana, São Paulo - SP, 08050-420' },
    { position: { lat: -23.605373868961745, lng: -46.45181757588272 }, address: 'Rua Iguatemi, R. Francisco de Melo Palheta - Parque Boa Esperança, São Paulo - SP, 08341-235' },
    { position: { lat: -23.57912380562445, lng: -46.495463808015685 }, address: 'Ecoponto São Mateus, R. Montalvânia, 195 - Jardim Sao Cristovao, São Paulo - SP, 03930-095' },
    { position: { lat: -23.628490016931035, lng: -46.446579993570495 }, address: 'Ecoponto Lima Bonfante, R. Capitão-mor Lázaro da Costa, 251 - Jardim Sao Francisco, São Paulo - SP, 08390-260' },
    { position: { lat: -23.627277710551844, lng: -46.46216452190331 }, address: 'Ecoponto Cipoaba, R. Padre Luís de Siqueira - Jardim Rodolfo Pirani, São Paulo - SP, 08310-190' },
    { position: { lat: -23.62819639316677, lng: -46.68547147564341 }, address: 'Vicente Rao' },
    { position: { lat: -23.635533863991803, lng: -46.7134999301457 }, address: 'Ecoponto Alceu Maynard de Araújo ,Av. Professor Alceu Maynard Araújo, 330 - Vila Cruzeiro, São Paulo - SP, 04728-110' },
    { position: { lat: -23.467043315809935, lng: -46.610085320489226 }, address: 'Ecoponto Tucuruvi ,R. Eduardo Vicente Nasser, 519 - Jardim Leonor Mendes de Barros, São Paulo - SP, 02344-050' },
    { position: { lat: -23.511228877174055, lng: -46.621985621076774 }, address: 'Ecoponto Zaki Narchi, Santana, São Paulo - SP, 02029-000' },
    { position: { lat: -23.44230888967541, lng: -46.749347096632725 }, address: 'Ecoponto Alexios Jafet, Av. Alexios Jafet - Vila Chica Luisa, São Paulo - SP, 05182-360' },
    { position: { lat: -23.43950566579221, lng: -46.74029391755697 }, address: 'Ecoponto Voith, Av. Atílio Brugnoli, 489 - Jardim Sao Joao (Jaragua), São Paulo - SP, 02996-010' },
    { position: { lat: -23.477494838461723, lng: -46.718232714789764 }, address: 'Ecoponto Vigário Godói, R. Vig. Godói, 480 - Vila Zat, São Paulo - SP, 02976-080' },
    { position: { lat: -23.492231799704847, lng: -46.72193975851571 }, address: 'Ecoponto Cônego José Salomon ,Av. Cônego José Salomon, 861 - Vila Portugal, São Paulo - SP, 02918-170' },
    { position: { lat: -23.55700466642433, lng: -46.710360038124506 }, address: 'Ecoponto Alto de Pinheiros, Praça Arcipreste Anselmo de Oliveira - Alto de Pinheiros, São Paulo - SP, 05463-080' },
    { position: { lat: -23.558276828656783, lng: -46.68751094746741 }, address: 'Ecoponto Vila Madalena, R. Girassol, 21 - Vila Madalena, São Paulo - SP, 05433-000' },
    { position: { lat: -23.597955308180648, lng: -46.69131639100398 }, address: 'Pinheiros' },
    { position: { lat: -23.432901574786523, lng: -46.792104531659966 }, address: 'Ecoponto Jardim Santa Fé, R. Salvador Albano - Jardim Santa Fé, São Paulo - SP, 05271-090' },
    { position: { lat: -23.409106020700786, lng: -46.750718573481606 }, address: 'Ecoponto Recanto dos Humildes, R. Salles Gomes, 415 - Perus, São Paulo - SP, 05208-110' },
    { position: { lat: -23.550492415482317, lng: -46.522360747467815 }, address: 'Ecoponto Vila Dalila, Rua Inácio Costa, 740 - Vila Dalila, São Paulo - SP, 03520-030' },
    { position: { lat: -23.548984690258163, lng: -46.48323286281301 }, address: 'Ecoponto COHAB Arthur Alvim ,Av. Padre Estanislau de Campos, 46-62 - Conj. Hab. Padre Manoel da Nobrega, São Paulo - SP, 03590-060' },
    { position: { lat: -23.539115082144328, lng: -46.515736533977076 }, address: 'Ecoponto Vila Talarico, Av. Dr. Bernardino Brito Fonseca de Carvalho, 956-1286 - Vila Talarico, São Paulo - SP' },
    { position: { lat: -23.53915263796822, lng: -46.50503610514081 }, address: 'Ecoponto Vila Matilde, R. Mateus de Siqueira - Cidade Patriarca, São Paulo - SP, 03556-020' },
    { position: { lat: -23.550590804449698, lng: -46.49493736281299 }, address: 'Ecoponto Gamelinha ,R. Morfeu, 25 - Vila Nhocuné, São Paulo - SP, 03563-295' },
    { position: { lat: -23.534054117747683, lng: -46.49121374330906 }, address: 'Ecoponto Franquinho, 463, R. Praia de Mucuripe, 177 - Artur Alvim, São Paulo - SP, 03687-100' },
    { position: { lat: -23.50210359573869, lng: -46.52783104139423 }, address: 'Cangaíba' },
    { position: { lat: -23.507866592382477, lng: -46.53633693913363 }, address: 'Ecoponto Tiquatira, Av. Governador Carvalho Pinto, s/n - Jardim Jau (Zona Leste), São Paulo - SP, 03730-040' },
    { position: { lat: -23.531274758921565, lng: -46.525443233977434 }, address: 'Ecoponto Penha I, R. Dr. Heládio, 104 - Penha de França, São Paulo - SP, 03650-020' },
    { position: { lat: -23.5322801502732, lng: -46.55149612259726 }, address: 'Ecoponto Vila Luisa, R. Manoel Graça - Guaiauna, São Paulo - SP, 03631-120' },
    { position: { lat: -23.54310096421947, lng: -46.593756047468126 }, address: 'Ecoponto Belém, R. Artur Mota - Belenzinho, São Paulo - SP, 03062-030' },
    { position: { lat: -23.546318187514164, lng: -46.607275505852144 }, address: 'Ecoponto Moóca, R, Av. Pires do Rio, 600 - Belém, 03160-010' },
    { position: { lat: -23.525003965563933, lng: -46.61033586861054 }, address: 'Ecoponto Pari, Av. Carlos de Campos, 1031 - Pari, São Paulo - SP, 03028-001' },
    { position: { lat: -23.538981932966625, lng: -46.62215306095954 }, address: 'Ecoponto Mendes Caldeira, R. Monsenhor Andrade, 685 - Brás, São Paulo - SP, 03008-000' },
    { position: { lat: -23.529069655481923, lng: -46.583143668553426 }, address: 'Ecoponto Água Rasa, Av. Salim Farah Maluf, 1494 - Quarta Parada, São Paulo - SP, 03304-090' },
    { position: { lat: -23.55300359617552, lng: -46.62474533802561 }, address: 'Ecoponto Brás, Av. Presidente Wilson, 724-730 - Brás, São Paulo - SP, 03101-001' },
    { position: { lat: -23.529894001077015, lng: -46.583089405141294 }, address: 'Ecoponto Tatuapé, Av. Salim Farah Maluf, 179 - Tatuapé, São Paulo - SP, 03304-090' },
    { position: { lat: -23.504007595670824, lng: -46.50942163040909 }, address: 'Ecoponto   Bresser, Praça Giuseppe Cesari, 54 - Brás, São Paulo - SP, 03053-020' },
    { position: { lat: -23.669552358266827, lng: -46.73614240513514 }, address: 'Ecoponto Piraporinha, R. João de Abreu, 326 - Jardim das Flores, São Paulo - SP, 04905-020' },
    { position: { lat: -23.5162936501126, lng: -46.74194058979687 }, address: 'Ecoponto Vila Jaguara, R. Agrestina, 189 - Jaguará, São Paulo - SP, 05117-100' },
    { position: { lat: -23.52416231493522, lng: -46.67047976736861 }, address: 'Ecoponto Viad. Antártica, Rua Robert Bosch, 242 - Parque Industrial Tomas Edson, São Paulo - SP, 05003-020' },
    { position: { lat: -23.632278662411295, lng: -46.630554805136775 }, address: 'Ecoponto Imigrantes, N°, Rua Opixé, 93 - Vila Guarani, São Paulo - SP, 04312-080' },
    { position: { lat: -23.652356559128418, lng: -46.649867037322245 }, address: 'Ecoponto Jabaquara, Rua Jupatis, 140 - Vila Mira, São Paulo - SP, 04377-200' },
    { position: { lat: -23.548624695999575, lng: -46.43634450514051 }, address: 'Cohab 2' },
    { position: { lat: -23.52081641681119, lng: -46.46356171863287 }, address: 'Ecoponto Parque Guarani, Praça Daniel Donda Pedrosa, 584 - Parque Guarani, São Paulo - SP' },
    { position: { lat: -23.578912771301695, lng: -46.48612630449288 }, address: 'Ecoponto Parque do Carmo, R. Machado Nunes, 95 - Jardim Nossa Sra. do Carmo, São Paulo - SP, 08275-310' },
    { position: { lat: -23.558986998484414, lng: -46.48865114746749 }, address: 'Ecoponto Osvaldo Valle Cordeiro, Av. Osvaldo Valle Cordeiro, S/N - Cidade Líder, São Paulo - SP, 03584-000' }
];


async function initMap() {
    const local = { lat: -23.538076383597282, lng: -46.46189247036771 };
    //raio de 3km
    const radius = 3000;

    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const map1 = new Map(document.getElementById("map1"), {
        center: local,
        zoom: 14,
        mapId: 'd98a6df342c18eb2',
        disableDefaultUI: true,
        zoomControl: true,
    });

    const map2 = new Map(document.getElementById("map2"), {
        center: local,
        zoom: 14,
        mapId: 'd98a6df342c18eb2',
        disableDefaultUI: true,
        zoomControl: true,
    });

    const map3 = new Map(document.getElementById("map3"), {
        center: local,
        zoom: 14,
        mapId: 'd98a6df342c18eb2',
        disableDefaultUI: true,
        zoomControl: true,
    });

    const infoWindow = new google.maps.InfoWindow();

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                map1.setCenter(pos);
                map2.setCenter(pos);
                map3.setCenter(pos);

                // Optionally trigger marker filtering for each map
                const markersInRadiusmap1 = getMarkersNoRaio(pos, radius);
                updateList(markersInRadiusmap1, "address-list1");

                const markersInRadiusmap2 = getMarkersNoRaio(pos, radius);
                updateList(markersInRadiusmap2, "address-list2");

                const markersInRadiusmap3 = getMarkersNoRaio(pos, radius);
                updateList(markersInRadiusmap3, "address-list3");

            },
            () => {
                handleLocationError(true, infoWindow, map1.getCenter());
                handleLocationError(true, infoWindow, map2.getCenter());
                handleLocationError(true, infoWindow, map3.getCenter());
            }
        );
    } else {
        handleLocationError(false, infoWindow, map1.getCenter());
        handleLocationError(false, infoWindow, map2.getCenter());
        handleLocationError(false, infoWindow, map3.getCenter());
    }

    const markers = [
        { lat: -23.54982324201291, lng: -46.525064535582544, title: 'aricanduva astarte' },
        { lat: -23.588202270006775, lng: -46.50891444666432, title: 'vila nova york' },
        { lat: -23.536933500938847, lng: -46.54732720328706, title: 'viaduto eng.° Alberto Badra' },
        { lat: -23.595336278464497, lng: -46.746721567449015, title: 'jardim maria do carmo' },
        { lat: -23.59933708473178, lng: -46.72142897815588, title: 'giovani gronchi' },
        { lat: -23.5876375495963, lng: -46.75457031516011, title: 'jardim jaqueline' },
        { lat: -23.575190447869854, lng: -46.7652718295265, title: 'politécnica' },
        { lat: -23.633903872128812, lng: -46.758006055669306, title: 'olinda' },
        { lat: -23.663817270534135, lng: -46.7768412096711, title: 'santos dias' },
        { lat: -23.671847400726445, lng: -46.792269154125286, title: 'parque fernanda' },
        { lat: -23.638087235015828, lng: -46.74160616625145, title: 'vila das belezas' },
        { lat: -23.62296949163627, lng: -46.725190233973386, title: 'paraisópolis' },
        { lat: -23.66194264912046, lng: -46.72253234746301, title: 'cidade saudavel' },
        { lat: -23.491604620422823, lng: -46.65578802916724, title: 'parque peruche' },
        { lat: -23.47202987539443, lng: -46.66987454747133, title: 'vila nova cachoeirinha' },
        { lat: -23.49373617439376, lng: -46.67151110328913, title: 'vila santa maria' },
        { lat: -23.454648073961202, lng: -46.6595213186357, title: 'jardim antártica' },
        { lat: -23.695239091806464, lng: -46.65165010698778, title: 'ademar cupecê' },
        { lat: -23.57358555752143, lng: -46.40015877711881, title: 'inacio monteiro' },
        { lat: -23.592967758674053, lng: -46.41552425488143, title: 'nascer do sol' },
        { lat: -23.58603846281423, lng: -46.39648454746625, title: 'barro branco' },
        { lat: -23.50317048776799, lng: -46.48442473212468, title: 'boturussu' },
        { lat: -23.523114755394708, lng: -46.48286428246718, title: 'jardim são nicolau' },
        { lat: -23.46972260147551, lng: -46.67497664932527, title: 'vila rica' },
        { lat: -23.50557903045723, lng: -46.70446334746972, title: 'freguesia do ó' },
        { lat: -23.48597333967452, lng: -46.69529748942138, title: 'bandeirantes' },
        { lat: -23.55507461639305, lng: -46.413001205140176, title: 'guaiaponto' },
        { lat: -23.530495064342695, lng: -46.406099132123536, title: 'lajeado' },
        { lat: -23.56529170138255, lng: -46.3983840763035, title: 'jardim sao paulo' },
        { lat: -23.568939169920576, lng: -46.608375089794464, title: 'tereza cristina' },
        { lat: -23.62368727346548, lng: -46.60563700513712, title: 'vila das mercês' },
        { lat: -23.600023700773875, lng: -46.59691668237776, title: 'heliópolis' },
        { lat: -23.599603310298875, lng: -46.62329498979311, title: 'santa cruz' },
        { lat: -23.50821253339896, lng: -46.416811754579506, title: 'mãe preta' },
        { lat: -23.501023206295535, lng: -46.38938444746997, title: 'pesqueiro' },
        { lat: -23.51421674464596, lng: -46.42129053583215, title: 'flamingo' },
        { lat: -23.497349340855838, lng: -46.37089356713524, title: 'moreira' },
        { lat: -23.520516329875175, lng: -46.42897610514164, title: 'vuruça' },
        { lat: -23.56214192345951, lng: -46.49933106281246, title: 'cidade líder' },
        { lat: -23.598915610324454, lng: -46.53447863397457, title: 'São Lucas' },
        { lat: -23.5820846396294, lng: -46.5713374657739, title: 'Anhaia Mello' },
        { lat: -23.592701537868034, lng: -46.63497287815611, title: 'Vila Mariana' },
        { lat: -23.594324493547887, lng: -46.622208047465925, title: 'Saioá' },
        { lat: -23.611560849889344, lng: -46.644525691646585, title: 'Mirandópolis' },
        { lat: -23.485521778201115, lng: -46.56529320514317, title: 'Vila Sabrina' },
        { lat: -23.516728761940627, lng: -46.58394190514184, title: 'Vila Maria' },
        { lat: -23.516948550797142, lng: -46.60042900514184, title: 'Vila Guilherme' },
        { lat: -23.549460608484043, lng: -46.628390214469775, title: 'Cambuci' },
        { lat: -23.524516408351626, lng: -46.642416730986504, title: 'Barra Funda' },
        { lat: -23.521116717755795, lng: -46.62777490514175, title: 'Armênia' },
        { lat: -23.555999600613532, lng: -46.6370930609588, title: 'Liberdade' },
        { lat: -23.562055903723333, lng: -46.64587737922207, title: 'Glicério' },
        { lat: -23.605383718839956, lng: -46.4969079628104, title: 'Teotônio Vilela' },
        { lat: -23.62330132442862, lng: -46.509238565788635, title: 'Sitio Oratório' },
        { lat: -23.50649631532205, lng: -46.46222602144665, title: 'Pedro Nunes' },
        { lat: -23.509906130003902, lng: -46.43280965567485, title: 'Itaqueruna' },
        { lat: -23.490439881184873, lng: -46.39430931686644, title: 'Carlito Maia' },
        { lat: -23.513893657927976, lng: -46.45669879192444, title: 'Imperador' },
        { lat: -23.605373868961745, lng: -46.45181757588272, title: 'Iguatemi' },
        { lat: -23.57912380562445, lng: -46.495463808015685, title: 'São Mateus' },
        { lat: -23.628490016931035, lng: -46.446579993570495, title: 'Lima Bonfante' },
        { lat: -23.627277710551844, lng: -46.46216452190331, title: 'Cipoaba' },
        { lat: -23.62819639316677, lng: -46.68547147564341, title: 'Vicente Rao' },
        { lat: -23.635533863991803, lng: -46.7134999301457, title: 'Alceu Maynard de Araújo' },
        { lat: -23.467043315809935, lng: -46.610085320489226, title: 'Tucuruvi' },
        { lat: -23.511228877174055, lng: -46.621985621076774, title: 'Santana' },
        { lat: -23.44230888967541, lng: -46.749347096632725, title: 'Alexios Jafet' },
        { lat: -23.43950566579221, lng: -46.74029391755697, title: 'Voith' },
        { lat: -23.477494838461723, lng: -46.718232714789764, title: 'Vigário Godói' },
        { lat: -23.492231799704847, lng: -46.72193975851571, title: 'Cônego José Salomon' },
        { lat: -23.55700466642433, lng: -46.710360038124506, title: 'Alto de Pinheiros' },
        { lat: -23.558276828656783, lng: -46.68751094746741, title: 'Vila Madalena' },
        { lat: -23.597955308180648, lng: -46.69131639100398, title: 'Pinheiros' },
        { lat: -23.432901574786523, lng: -46.792104531659966, title: 'Jardim Santa Fé' },
        { lat: -23.409106020700786, lng: -46.750718573481606, title: 'Recanto dos Humildes' },
        { lat: -23.550492415482317, lng: -46.522360747467815, title: 'Vila Dalila' },
        { lat: -23.548984690258163, lng: -46.48323286281301, title: 'COHAB' },
        { lat: -23.539115082144328, lng: -46.515736533977076, title: 'Vila Talarico' },
        { lat: -23.53915263796822, lng: -46.50503610514081, title: 'Vila Matilde' },
        { lat: -23.550590804449698, lng: -46.49493736281299, title: 'Gamelinha' },
        { lat: -23.534054117747683, lng: -46.49121374330906, title: 'Franquinho' },
        { lat: -23.50210359573869, lng: -46.52783104139423, title: 'Cangaíba' },
        { lat: -23.507866592382477, lng: -46.53633693913363, title: 'Tiquatira' },
        { lat: -23.531274758921565, lng: -46.525443233977434, title: 'Penha I' },
        { lat: -23.5322801502732, lng: -46.55149612259726, title: 'Vila Luisa' },
        { lat: -23.54310096421947, lng: -46.593756047468126, title: 'Belém' },
        { lat: -23.546318187514164, lng: -46.607275505852144, title: 'Moóca' },
        { lat: -23.525003965563933, lng: -46.61033586861054, title: 'Pari' },
        { lat: -23.538981932966625, lng: -46.62215306095954, title: 'Mendes Caldeira' },
        { lat: -23.529069655481923, lng: -46.583143668553426, title: 'Água Rasa' },
        { lat: -23.55300359617552, lng: -46.62474533802561, title: 'Brás' },
        { lat: -23.529894001077015, lng: -46.583089405141294, title: 'Tatuapé' },
        { lat: -23.504007595670824, lng: -46.50942163040909, title: 'Bresser' },
        { lat: -23.669552358266827, lng: -46.73614240513514, title: 'Piraporinha' },
        { lat: -23.5162936501126, lng: -46.74194058979687, title: 'Vila Jaguara' },
        { lat: -23.52416231493522, lng: -46.67047976736861, title: 'Viad. Antártica' },
        { lat: -23.632278662411295, lng: -46.630554805136775, title: 'Imigrantes' },
        { lat: -23.652356559128418, lng: -46.649867037322245, title: 'Jabaquara' },
        { lat: -23.548624695999575, lng: -46.43634450514051, title: 'Cohab 2' },
        { lat: -23.52081641681119, lng: -46.46356171863287, title: 'Parque Guarani' },
        { lat: -23.578912771301695, lng: -46.48612630449288, title: 'Parque do Carmo' },
        { lat: -23.558986998484414, lng: -46.48865114746749, title: 'Osvaldo Valle Cordeiro' },
    ];

    markers.forEach(function (markerData) {
        const iconElement = document.createElement('img');
        iconElement.src = '../../src/map_marker.png';
        iconElement.style.width = '40px';
        iconElement.style.height = '40px';

        const advancedMarker = new google.maps.marker.AdvancedMarkerElement({
            position: { lat: markerData.lat, lng: markerData.lng },
            map: map1,
            content: iconElement,
            title: markerData.title,
        });
    });

    markers.forEach(function (markerData) {
        const iconElement = document.createElement('img');
        iconElement.src = '../../src/map_marker.png';
        iconElement.style.width = '40px';
        iconElement.style.height = '40px';

        const advancedMarker = new google.maps.marker.AdvancedMarkerElement({
            position: { lat: markerData.lat, lng: markerData.lng },
            map: map2,
            content: iconElement,
            title: markerData.title,
        });
    });

    markers.forEach(function (markerData) {
        const iconElement = document.createElement('img');
        iconElement.src = '../../src/map_marker.png';
        iconElement.style.width = '40px';
        iconElement.style.height = '40px';

        const advancedMarker = new google.maps.marker.AdvancedMarkerElement({
            position: { lat: markerData.lat, lng: markerData.lng },
            map: map3,
            content: iconElement,
            title: markerData.title,
        });
    });

    const markersInRadiusFromInitial = getMarkersNoRaio(local, radius);
    updateList(markersInRadiusFromInitial, "address-list1");

    // Search box setup
    const input1 = document.getElementById("barra-de-pesquisa1");
    const input2 = document.getElementById("barra-de-pesquisa2");
    const input3 = document.getElementById("barra-de-pesquisa3");
    const searchBox1 = new google.maps.places.SearchBox(input1);
    const searchBox2 = new google.maps.places.SearchBox(input2);
    const searchBox3 = new google.maps.places.SearchBox(input3);


    map1.addListener("bounds_changed", () => {
        searchBox1.setBounds(map1.getBounds());
    });

    map2.addListener("bounds_changed", () => {
        searchBox2.setBounds(map2.getBounds());
    });

    map3.addListener("bounds_changed", () => {
        searchBox3.setBounds(map3.getBounds());
    });


    searchBox1.addListener("places_changed", () => {
        const placesmap1 = searchBox1.getPlaces();

        if (placesmap1.length === 0) return;

        const placemap1 = placesmap1[0]; // First place selected

        if (placemap1.geometry && placemap1.geometry.location) {
            map1.setCenter(placemap1.geometry.location);
            map1.setZoom(14);

            // Filter markers within 3000 km radius
            const pos = {
                lat: placemap1.geometry.location.lat(),
                lng: placemap1.geometry.location.lng(),
            };
            const markersInRadiusmap1 = getMarkersNoRaio(pos, radius);
            updateList(markersInRadiusmap1, "address-list1");
        }
    });

    searchBox2.addListener("places_changed", () => {
        const placesmap2 = searchBox2.getPlaces();

        if (placesmap2.length === 0) return;

        const placemap2 = placesmap2[0]; // First place selected

        if (placemap2.geometry && placemap2.geometry.location) {
            map2.setCenter(placemap2.geometry.location);
            map2.setZoom(14);

            const pos = {
                lat: placemap2.geometry.location.lat(),
                lng: placemap2.geometry.location.lng(),
            };

            // Filter markers within 3000 km radius
            const markersInRadiusmap2 = getMarkersNoRaio(pos, radius);
            updateList(markersInRadiusmap2, "address-list2");
        }
    });

    searchBox3.addListener("places_changed", () => {
        const placesmap3 = searchBox3.getPlaces();

        if (placesmap3.length === 0) return;

        const placemap3 = placesmap3[0];

        if (placemap3.geometry && placemap3.geometry.location) {
            map3.setCenter(placemap3.geometry.location);
            map3.setZoom(14);

            const pos = {
                lat: placemap3.geometry.location.lat(),
                lng: placemap3.geometry.location.lng(),
            };

            const markersInRadiusmap3 = getMarkersNoRaio(pos, radius);
            updateList(markersInRadiusmap3, "address-list3");
        }
    });

}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map1);
    infoWindow.open(map2);
    infoWindow.open(map3);
}

function getMarkersNoRaio(center, radius) {
    const userLocation = { lat: center.lat, lng: center.lng };

    const markersInRadius = markersData.filter(marker => {
        const markerLatLng = new google.maps.LatLng(marker.position.lat, marker.position.lng);
        const centerLatLng = new google.maps.LatLng(userLocation.lat, userLocation.lng);

        const distance = google.maps.geometry.spherical.computeDistanceBetween(centerLatLng, markerLatLng);

        return distance <= radius; // Only include markers within the radius
    });

    return markersInRadius.slice(0, 4); // Limit to 4 markers
}

function updateList(markersInRadius, listElementId) {
    const listDiv = document.getElementById(listElementId);
    listDiv.innerHTML = ""; // Clear existing list
    
    if (!listDiv) {
        console.error(`Element with id '${listElementId}' not found.`);
        return;
    }

    if (markersInRadius.length === 0) {
        listDiv.innerHTML = "<p>Nenhum Eco-Ponto encontrado na sua região</p>";
    } else {
        markersInRadius.forEach(marker => {
            const listItem = document.createElement("p");
            listItem.textContent = marker.address; // Use marker address
            listDiv.appendChild(listItem);
        });
    }
}

window.initMap = initMap;