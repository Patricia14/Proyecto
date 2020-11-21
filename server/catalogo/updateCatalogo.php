<?php
 ?>
<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: *');
if ($_SERVER['REQUEST_METHOD'] != 'PUT') {
    exit('Solo acepto peticiones PUT');
}
$jsonCatalogo = json_decode(file_get_contents('php://input'));
if (!$jsonCatalogo) {
    exit('No hay datos');
}
$bd = include_once '../bd.php';
$sentencia = $bd->prepare('UPDATE catalogo SET nombre_catalogo = ?, precio_catalogo = ?, codigo_catalogo = ?, descripcion_catalogo = ? where id_catalogo = ?');
$resultado = $sentencia->execute([$jsonCatalogo->nombre_catalogo, $jsonCatalogo->precio_catalogo, $jsonCatalogo->codigo_catalogo, $jsonCatalogo->descripcion_catalogo, $jsonCatalogo->id_catalogo]);
echo json_encode($resultado);
