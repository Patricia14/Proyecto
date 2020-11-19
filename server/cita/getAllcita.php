<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "../bd.php";

$sentencia = $bd->query("SELECT cita.id_cita, cita.fecha_cita, cita.hora_cita, cita.descripcion_cita, cita.id_cliente, mascota.nombre_mascota FROM cita INNER JOIN mascota ON cita.id_cliente=mascota.id_mascota");
$expediente = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($expediente);
