<?php
$hostname = "localhost";
$bancodedados = "users"; // Certifique-se de que o banco de dados foi criado
$usuario = "root";
$senha = "";

// Conectar ao banco de dados
$mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados);

try {
    // Verificar conexão
    if ($mysqli->connect_errno) {
        throw new Exception("Falha ao conectar: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error);
    }

    // Receber os dados do formulário
    $nome = $mysqli->real_escape_string($_POST['nome'] ?? '');
    $sobrenome = $mysqli->real_escape_string($_POST['sobrenome'] ?? '');
    $telefone = $mysqli->real_escape_string($_POST['telefone'] ?? '');
    $email = $mysqli->real_escape_string($_POST['email'] ?? '');
    $cidade = $mysqli->real_escape_string($_POST['cidade'] ?? '');
   

    // Inserir dados no banco de dados
    $sql = "INSERT INTO usuarios (nome, sobrenome, telefone, email, cidade) 
                VALUES ('$nome', '$sobrenome', '$telefone', '$email', '$cidade');";

    if ($mysqli->query($sql) === TRUE) {
        echo "Usuário Cadastrado";
    } else {
        throw new Exception("Erro ao cadastrar: " . $mysqli->error);
    }

} catch (Exception $e) {
    echo "Erro: " . $e->getMessage();
} finally {
    // Fechar a conexão
    if (isset($mysqli) && $mysqli) {
        $mysqli->close();
    }
}
?>
