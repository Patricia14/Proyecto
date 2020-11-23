<?php
header( 'Access-Control-Allow-Origin: http://localhost:4200' );
$bd = include_once 'bd.php';
$sentencia = $bd->query( 'select id_mascota, nombre_mascota, edad_mascota, raza_mascota, id_cliente, usuario.nombre_usuario from mascota INNER JOIN usuario ON id_cliente = usuario.id_usuario' );
$mascotas = $sentencia->fetchAll( PDO::FETCH_OBJ );
echo json_encode( $mascotas );
