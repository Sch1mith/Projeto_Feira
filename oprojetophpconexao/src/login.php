<?php

class Login
{
    private $username;
    private $password;

    // construtor
    public function __construct($username, $password)
    {
        $this->username = $username;
        $this->password = $password;
    }

    // verificar o login
    public function authenticate()
    {

        $expectedUsername = 'admin';
        $expectedPassword = 'admin123';

        // verifica as credenciais 
        if ($this->username === $expectedUsername && $this->password === $expectedPassword) {
            return 'Login efetuado com sucesso';
        } else {
            return 'Erro no login';
        }
    }
}

?>

