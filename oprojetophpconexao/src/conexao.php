<?php
$hostname = "localhost";
$bancodedados = "clientes"; // Certifique-se de que o banco de dados foi criado
$usuario = "root";
$senha = "";
 
try {
    // Conectar ao banco de dados
    $mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados);
   
    // Verificar conexão
    if ($mysqli->connect_errno) {
        throw new Exception("Falha ao conectar: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error);
    }
   
    // Receber os dados do formulário
    $nome = $mysqli->real_escape_string($_POST['nome']);
    $email = $mysqli->real_escape_string($_POST['email']);
    $telefone = $mysqli->real_escape_string($_POST['telefone']);
    $senha1 = $_POST['senha'];
    $senha2 = $_POST['confirmar'];
 
    // Verificar se as senhas são iguais
    if ($senha1 !== $senha2) {
        throw new Exception("As senhas não coincidem.");
    }
 
    // Inserir dados no banco de dados
    $sql = "INSERT INTO clientes (nome, email, telefone, senha) VALUES ('$nome', '$email', '$telefone', '$senha1')";
   
    if ($mysqli->query($sql) === TRUE) {
        echo "USUÁRIO CADASTRADO COM SUCESSO";
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