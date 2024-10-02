<?php
require_once 'Login.php';

include("conexao.php");

$message = '';
$loginSuccess = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // pega os dados do formulário
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    // cria uma instância da classe Login
    $login = new Login($username, $password);

    //autenticar e armazenar a mensagem
    $message = $login->authenticate();
    
    // Verifica se o login foi feito certo
    $loginSuccess = ($message === 'Login efetuado com sucesso');
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Usuário</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }

        h1 {
            text-align: center;
            color: #333;
        }

        form {
            max-width: 400px;
            margin: 20px auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
            transition: border 0.3s, box-shadow 0.3s;
        }

        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="password"]:focus {
            border-color: #007BFF;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
            outline: none;
        }

        .shadow__btn {
            background-color: #007BFF;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s, transform 0.3s;
            width: 100%;
        }

        .shadow__btn:hover {
            background-color: #0056b3;
            transform: scale(1.05);
        }

        .link-login {
            color: #007BFF;
            text-decoration: none;
        }

        .link-login:hover {
            text-decoration: underline;
        }

        p {
            text-align: center;
            margin-top: 20px;
            color: #555;
        }
    </style>
    </head>
<body>
    
        <h1>Cadastro de Usuário</h1>
        <form action="#" method="post">
            
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required>
            
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            
                <label for="telefone">Telefone:</label>
                <input type="text" id="telefone" name="telefone" required>
            
                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="senha" required>
            
                <label for="confirmar">Confirmar Senha:</label>
                <input type="password" id="confirmar" name="confirmar" required>
            
            <button type="submit" class="shadow__btn">Cadastrar</button>
        </form>
 
        
           
 
   
    <?php if ($message): ?>
        <p><?php echo htmlspecialchars($message); ?></p>
    <?php endif; ?>
    </div>
</body>
</html>
