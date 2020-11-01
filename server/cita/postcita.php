
<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonCita = json_decode(file_get_contents("php://input"));
if (!$jsonCita) {
    exit("No hay datos");
}
$bd = include_once "../bd.php";
$sentencia = $bd->prepare("INSERT INTO cita(fecha_cita, hora_cita, descripcion_cita, id_cliente) values (?,?,?,?)");
$resultado = $sentencia->execute([$jsonCita->fecha_cita ,$jsonCita->hora_cita, $jsonCita->descripcion_cita, $jsonCita->id_cliente ]);
echo json_encode(["resultado" => $resultado,]);
