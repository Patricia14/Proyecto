<?php
header("Access-Control-Allow-Origin: *");
$bd = include_once "../bd.php";

$sentencia = $bd->query("SELECT id_mascota, nombre_mascota FROM mascota");
$expediente = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($expediente);


