
<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");
$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["idCita"])) {
    exit("No hay id de Cita para eliminar");
}
$idCita = $_GET["idCita"];
$bd = include_once "../bd.php";
$sentencia = $bd->prepare("DELETE FROM cita WHERE id_cita = ?");
$resultado = $sentencia->execute([$idCita]);
echo json_encode($resultado);
