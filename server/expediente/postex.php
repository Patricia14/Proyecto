
<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonExpediente = json_decode(file_get_contents("php://input"));
if (!$jsonExpediente) {
    exit("No hay datos");
}
$bd = include_once "../bd.php";
$sentencia = $bd->prepare("INSERT INTO expediente(id_cita, descripcion_expediente) values (?,?)");
$resultado = $sentencia->execute([$jsonExpediente->id_cita, $jsonExpediente->descripcion_expediente]);
echo json_encode(["resultado" => $resultado,]);
