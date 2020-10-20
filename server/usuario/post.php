<?php
header( 'Access-Control-Allow-Origin: *' );
header( 'Access-Control-Allow-Headers: *' );
header( 'Access-Control-Allow-Credentials: true' );
header( 'Access-Control-Allow-Methods: PUT, GET, POST, DELETE' );
header( 'Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept' );
header( 'Content-Type: application/json; charset=UTF-8' );
$jsonUsuario = json_decode( file_get_contents( 'php://input' ) );
if ( !$jsonUsuario ) {
    exit( 'No hay datos' );
}
$bd = include_once '../bd.php';
$sentencia = $bd->prepare( 'insert into usuario(nombre_usuario, apellido_usuario, correo_usuario, password_usuario, tipo_usuario) values (?,?,?,?,?)' );
$resultado = $sentencia->execute( [$jsonUsuario->nombre, $jsonUsuario->apellido, $jsonUsuario->email, $jsonUsuario->password, $jsonUsuario->tipo_usuario] );
echo json_encode( [
    'resultado' => $resultado,
] );
