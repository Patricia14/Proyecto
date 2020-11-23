<?php
 ?>
<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: *');
if ($_SERVER['REQUEST_METHOD'] != 'PUT') {
    exit('Solo acepto peticiones PUT');
}
$jsonMascota = json_decode(file_get_contents('php://input'));
if (!$jsonMascota) {
    exit('No hay datos');
}
$bd = include_once 'bd.php';
$sentencia = $bd->prepare('UPDATE mascota SET nombre_mascota = ?, edad_mascota = ?, raza_mascota = ?, id_cliente = ? WHERE id_mascota = ?');
$resultado = $sentencia->execute([$jsonMascota->nombre_mascota, $jsonMascota->edad_mascota, $jsonMascota->raza_mascota, $jsonMascota->id_cliente, $jsonMascota->id_mascota]);
echo json_encode($resultado);
