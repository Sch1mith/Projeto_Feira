<?php
// Configurações de conexão com o banco de dados
$host = 'localhost'; // Endereço do servidor
$dbname = 'projeto'; // Nome do banco de dados
$username = 'root'; // Usuário do banco
$password = ''; // Senha do banco

try {
    // Conexão com o banco de dados usando PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Verifica se o termo foi enviado pelo formulário
    if (isset($_POST['termo'])) {
        $termo = $_POST['termo'];

        // Consulta na tabela 'lixo'
        $stmt = $pdo->prepare("SELECT tipo FROM lixo WHERE tipo LIKE :termo");
        $stmt->execute([':termo' => "%$termo%"]);
        $resultado = $stmt->fetch(PDO::FETCH_ASSOC);

        // Verifica se encontrou resultados
        if ($resultado) {
            // Armazena o valor encontrado na variável
            $tipo = $resultado['tipo'];
        } else {
            // Mostra o pop-up caso nenhum resultado seja encontrado
            echo "<script>alert('Nenhum resultado encontrado.');</script>";
        }
    }
} catch (PDOException $e) {
    // Em caso de erro de conexão ou execução
    echo "Erro: " . $e->getMessage();
}
?>