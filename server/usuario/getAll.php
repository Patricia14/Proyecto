<?php
header( 'Access-Control-Allow-Origin: http://localhost:4200' );
$bd = include_once '../bd.php';
$sentencia = $bd->query( 'select id_usuario, nombre_usuario, apellido_usuario, correo_usuario, nombre_tipo_usuario FROM usuario INNER JOIN tipo_usuario ON usuario.tipo_usuario = tipo_usuario.id_tipo_usuario' );
$usuarios = $sentencia->fetchAll( PDO::FETCH_OBJ );
echo json_encode( $usuarios );
