

<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");
$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["idCatalogo"])) {
    exit("No hay id de catalogo para eliminar");
}
$idCatalogo = $_GET["idCatalogo"];
$bd = include_once "../bd.php";
$sentencia = $bd->prepare("DELETE FROM catalogo WHERE id_catalogo = ?");
$resultado = $sentencia->execute([$idCatalogo]);
echo json_encode($resultado);
