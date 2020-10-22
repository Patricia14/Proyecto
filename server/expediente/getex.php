
<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idExpediente"])) {
    exit("No hay id de expediente");
}
$idExpediente = $_GET["idExpediente"];
$bd = include_once "../bd.php";
$sentencia = $bd->prepare("SELECT id_expediente, id_cita, descripcion_expediente FROM expediente WHERE id_expediente  = ?");
$sentencia->execute([$idExpediente]);
$expediente = $sentencia->fetchObject();
echo json_encode($expediente);
