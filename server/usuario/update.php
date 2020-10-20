<?php
 ?>
<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: *');
if ($_SERVER['REQUEST_METHOD'] != 'PUT') {
    exit('Solo acepto peticiones PUT');
}
$jsonUsuario = json_decode(file_get_contents('php://input'));
if (!$jsonUsuario) {
    exit('No hay datos');
}
$bd = include_once '../bd.php';
$sentencia = $bd->prepare('UPDATE usuario SET nombre_usuario = ?, apellido_usuario = ?, correo_usuario = ?, password_usuario = ?, tipo_usuario = ? WHERE id_usuario = ?');
$resultado = $sentencia->execute([$jsonUsuario->nombre_usuario, $jsonUsuario->apellido_usuario, $jsonUsuario->correo_usuario, $jsonUsuario->password_usuario, $jsonUsuario->tipo_usuario, $jsonUsuario->id_usuario]);
echo json_encode($resultado);
