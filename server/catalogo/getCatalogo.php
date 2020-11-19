
<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idCatalogo"])) {
    exit("No hay id de Catalogo");
}
$idCatalogo = $_GET["idCatalogo"];
$bd = include_once "../bd.php";
$sentencia = $bd->prepare("select id_catalogo, nombre_catalogo, precio_catalogo, imagen_catalogo, descripcion_catalogo from catalogo where id_catalogo=?");
$sentencia->execute([$idCatalogo]);
$catalogo = $sentencia->fetchObject();
echo json_encode($catalogo);
