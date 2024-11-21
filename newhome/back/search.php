<?php
require_once 'DBConnection.php';

if (isset($_GET['search'])) {
    $searchQuery = $_GET['search'];

    $conn = DBConnection::getConnection();
    $sql = "SELECT * FROM lixo WHERE nome LIKE :searchQuery";
    $stmt = $conn->prepare($sql);
    $stmt->bindValue(':searchQuery', '%' . $searchQuery . '%');

    $stmt->execute();

    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($results) {
        $tipo = $results[0]['tipo'];
        header("Location: ../main/html/conteudo.html?tab=" . urlencode($tipo));
        exit;
    } else {
        header("Location: ../main/html/conteudo.html?tab=default");
        exit;
    }
}
?>