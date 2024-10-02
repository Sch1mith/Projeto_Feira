<?php

$hostname = "localhost:8000";
$bancodedados = "projeto"; // Certifique-se de que o banco de dados foi criado
$usuario = "root";
$senha = "";


    // Receber os dados do formulário
    $nome = $mysqli->real_escape_string($_POST['nome']);
    $telefone = $mysqli->real_escape_string($_POST['telefone']);
    $tipo_lixo = $mysqli->real_escape_string($_POST['tipo_lixo']);
    $UF = $mysqli->real_escape_string($_POST['UF']);
    $cidade = $mysqli->real_escape_string($_POST['cidade']);
    $bairro = $mysqli->real_escape_string($_POST['bairro']);
    $cep = $mysqli->real_escape_string($_POST['cep']);
    $endereco = $mysqli->real_escape_string($_POST['endereco']);
    // Conectar ao banco de dados
    $mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados);

 
try {

    // Verificar conexão
    if ($mysqli->connect_errno) {
        throw new Exception("Falha ao conectar: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error);
    }
   
    // Inserir dados no banco de dados
    $sql = "INSERT INTO ecoponto (nome, telefone, tipo_lixo, UF, cidade, bairro, cep, endereco) 
                VALUES ('$nome', '$telefone', '$tipo_lixo', '$UF', '$cidade', '$bairro', '$cep', '$endereco');";
   
    if ($mysqli->query($sql) === TRUE) {
        echo "Eco Point Cadastrado";
    } else {
        throw new Exception("Erro ao cadastrar: " . $mysqli->error);
    }
 
} catch (Exception $e) {
    echo "DEU RUIM: " . $e->getMessage();
} finally {
    // Fechar a conexão
    if (isset($mysqli) && $mysqli) {
        $mysqli->close();
    }
}
?>