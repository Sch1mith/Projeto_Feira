<?php
    include '../model/ecoPonto.php';
    include '../connectioFactory//conexao.php';

    $nome = $_POST['nome'] ?? '';
    $telefone = $_POST['telefone'] ?? '';
    $tipo_lixo = $_POST['tipo_lixo'] ?? '';
    $UF = $_POST['UF'] ?? '';
    $cidade = $_POST['cidade'] ?? '';
    $bairro = $_POST['bairro'] ?? '';
    $cep = $_POST['cep'] ?? '';
    $endereco = $_POST['endereco'] ?? '';


    if ($login === $usuario->getLogin() && $senha === $usuario->getSenha()) {
        echo 'Seja bem-vindo!';
    } else {
        echo 'Usuário ou senha inválidos.';
    }
?>