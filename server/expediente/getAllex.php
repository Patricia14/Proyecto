<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "../bd.php";

$sentencia = $bd->query("SELECT mascota.id_mascota, mascota.nombre_mascota, expediente.id_expediente, expediente.descripcion_expediente, cita.id_cita, cita.fecha_cita FROM cita INNER JOIN expediente ON cita.id_cita = expediente.id_cita INNER JOIN mascota ON cita.id_cliente=mascota.id_mascota");
$expediente = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($expediente);
