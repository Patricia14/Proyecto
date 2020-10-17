
<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idMascota"])) {
    exit("No hay id de mascota");
}
$idMascota = $_GET["idMascota"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("select id_mascota, nombre_mascota, edad_mascota, raza_mascota from mascota where id_mascota = ?");
$sentencia->execute([$idMascota]);
$mascota = $sentencia->fetchObject();
echo json_encode($mascota);
