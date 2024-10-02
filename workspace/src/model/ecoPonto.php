<?php

class ecoPonto
{
    private int $id;
    private String $nome;
    private String $telefone;
    private String $tipo_lixo;
    private String $UF;
    private String $cidade;
    private String $bairro;
    private String $cep;
    private String $endereco;

    public function __construct($nome, $telefone, $tipo_lixo, $UF, $cidade, $bairro, $cep, $endereco)
    {
        $this->nome = $nome;
        $this->telefone = $telefone;
        $this->tipo_lixo = $tipo_lixo;
        $this->UF = $UF;
        $this->cidade = $cidade;
        $this->bairro = $bairro;
        $this->cep = $cep;
        $this->endereco = $endereco;
    }
}

?>