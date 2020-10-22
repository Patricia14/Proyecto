
<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");
$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["idExpediente"])) {
    exit("No hay id de mascota para eliminar");
}
$idExpediente = $_GET["idExpediente"];
$bd = include_once "../bd.php";
$sentencia = $bd->prepare("DELETE FROM expediente WHERE id_expediente = ?");
$resultado = $sentencia->execute([$idExpediente]);
echo json_encode($resultado);
