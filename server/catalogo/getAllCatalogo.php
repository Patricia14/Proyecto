<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "../bd.php";

$sentencia = $bd->query("select id_catalogo, nombre_catalogo, precio_catalogo, codigo_catalogo, descripcion_catalogo FROM catalogo");
$catalogo = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($catalogo);
