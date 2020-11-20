
<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idCita"])) {
    exit("No hay id de cita");
}
$idCita = $_GET["idCita"];
$bd = include_once "../bd.php";

$sentencia = $bd->prepare("SELECT id_cita, fecha_cita, hora_cita, descripcion_cita, id_cliente FROM cita WHERE id_cita=?");
$sentencia->execute([$idCita]);
$cita = $sentencia->fetchObject();
echo json_encode($cita);
