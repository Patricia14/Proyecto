
<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonMascota = json_decode(file_get_contents("php://input"));
if (!$jsonMascota) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("insert into mascota(nombre_mascota, edad_mascota, raza_mascota) values (?,?,?)");
$resultado = $sentencia->execute([$jsonMascota->nombre_mascota, $jsonMascota->edad_mascota, $jsonMascota->raza_mascota]);
echo json_encode([
    "resultado" => $resultado,
]);
