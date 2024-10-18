<?php

$hostname = "localhost:8000";
$bancodedados = "projeto"; // Certifique-se de que o banco de dados foi criado
$usuario = "root";
$senha = "";


    // Receber os dados do formulário
    $nome = $mysqli->real_escape_string($_POST['nome']);
    $sobrenome = $mysqli->real_escape_string($_POST['sobrenome']);
    $telefone = $mysqli->real_escape_string($_POST['telefone']);
    $email = $mysqli->real_escape_string($_POST['email']);
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
    $sql = "INSERT INTO ecoponto (nome, sobrenome, telefone, email, cidade)
            VALUES ('$nome', '$telefone', '$tipo_lixo', '$UF', '$cidade');";  
            
    if ($mysqli->query($sql) === TRUE) {
        echo "Usuario Cadastrado";
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