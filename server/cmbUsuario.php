<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";

$sentencia = $bd->query("SELECT id_usuario, nombre_usuario FROM usuario");
$expediente = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($expediente);
