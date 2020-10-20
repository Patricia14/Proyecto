
<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");
$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["idUsuario"])) {
    exit("No hay id de mascota para eliminar");
}
$idUsuario = $_GET["idUsuario"];
$bd = include_once "../bd.php";
$sentencia = $bd->prepare("DELETE FROM usuario WHERE id_usuario = ?");
$resultado = $sentencia->execute([$idUsuario]);
echo json_encode($resultado);
