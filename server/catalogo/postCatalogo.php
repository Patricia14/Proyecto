
<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonCatalogo = json_decode(file_get_contents("php://input"));
if (!$jsonCatalogo) {
    exit("No hay datos");
}
$bd = include_once "../bd.php";
$sentencia = $bd->prepare("insert into catalogo(nombre_catalogo, precio_catalogo, imagen_catalogo, descripcion_catalogo) VALUES (?,?,?,?)");
$resultado = $sentencia->execute([$jsonCatalogo->nombre, $jsonCatalogo->precio, $jsonCatalogo->imagen, $jsonCatalogo->descripcion]);
echo json_encode([
    "resultado" => $resultado,
]);
