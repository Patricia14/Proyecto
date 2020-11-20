<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "../bd.php";

$sentencia = $bd->query("SELECT c.id_cita, c.descripcion_cita, c.id_cliente,m.nombre_mascota FROM cita c inner join mascota m on c.id_cliente=m.id_mascota");
$expediente = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($expediente);
