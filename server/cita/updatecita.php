
<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: *');
if ($_SERVER['REQUEST_METHOD'] != 'PUT') {
    exit('Solo acepto peticiones PUT');
}
$jsonCita = json_decode(file_get_contents('php://input'));
if (!$jsonCita) {
    exit('No hay datos');
}
$bd = include_once '../bd.php';
$sentencia = $bd->prepare("UPDATE cita SET fecha_cita = ?,hora_cita = ?, descripcion_cita = ?, id_cliente = ? WHERE id_cita = ?");
$resultado = $sentencia->execute([$jsonCita->fecha_cita, $jsonCita->hora_cita, $jsonCita->descripcion_cita, $jsonCita->id_cliente, $jsonCita->id_cita]) or die ("Error : ". mysql_error($sentencia));

if($resultado){
	echo json_encode(["resultado" => $resultado,]);
}
	else{
			http_response_code( 404 );
			echo "Fecha y hora ya utilizadas, ";
	}
