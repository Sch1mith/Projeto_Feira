<?php
$host = 'localhost';
$dbname = 'projeto';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if (isset($_POST['termo'])) {
        $termo = $_POST['termo'];

        $stmt = $pdo->prepare("SELECT tipo FROM lixo WHERE nome = :termo");
        $stmt->execute([':termo' => $termo]);
        $resultado = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($resultado) {
            $tipo = $resultado['tipo'];
        } else {
            $tipo = '';
        }
    }
} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const valor = <?php echo json_encode($tipo); ?>;

            if (valor) {
                localStorage.setItem('dataValor', valor); 
                console.log(`Valor salvo no LocalStorage: ${valor}`);
            } else {
                console.log("Nenhum valor encontrado para salvar no LocalStorage.");
            }

            window.location.href = "../main/Index.html"; 
        });
    </script>
</body>

</html>