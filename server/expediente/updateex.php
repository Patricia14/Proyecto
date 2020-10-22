<?php
 ?>
<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");
}
$jsonExpediente = json_decode(file_get_contents("php://input"));
if (!$jsonExpediente) {
    exit("No hay datos");
}
$bd = include_once "../bd.php";
$sentencia = $bd->prepare("UPDATE expediente SET id_cita = ?, descripcion_expediente = ? WHERE id_expediente = ?");
$resultado = $sentencia->execute([$jsonExpediente->id_cita, $jsonExpediente->descripcion_expediente, $jsonExpediente->id_expediente]);
echo json_encode($resultado);
