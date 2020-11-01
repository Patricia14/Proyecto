<?php
 ?>
<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");
}
$jsonCita = json_decode(file_get_contents("php://input"));
if (!$jsonCita) {
    exit("No hay datos");
}
$bd = include_once "../bd.php";
$sentencia = $bd->prepare("UPDATE cita SET fecha_cita = ?,hora_cita = ?, descripcion_cita = ?, id_cliente = 24 WHERE id_cita = 10");
$resultado = $sentencia->execute([$jsonCita->fecha_cita, $jsonCita->hora_cita, $jsonCita->descripcion_cita, $jsonCita->id_cliente, $jsonCita->id_cita]);
echo json_encode($resultado);