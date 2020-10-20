<?php
header( 'Access-Control-Allow-Origin: http://localhost:4200' );
$bd = include_once 'bd.php';
$sentencia = $bd->query( 'select id_mascota, nombre_mascota, edad_mascota, raza_mascota from mascota' );
$mascotas = $sentencia->fetchAll( PDO::FETCH_OBJ );
echo json_encode( $mascotas );
