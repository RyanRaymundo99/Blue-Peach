<?php

// ConexÃ£o com o banco de dados
$host = "192.168.100.5";
$usuario = "root";
$senha = "qawsed12@@";
$banco = "avamte50_sistema";
$conexao = mysqli_connect($host, $usuario, $senha, $banco);

$selecao = $_SESSION['email'];


// VerificaÃ§Ã£o de erros na conexÃ£o
if (mysqli_connect_errno()) {
    die("Falha na conexÃ£o com o banco de dados: " . mysqli_connect_error());
}

?>