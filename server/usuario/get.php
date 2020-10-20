
<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idUsuario"])) {
    exit("No hay id de usuario");
}
$idUsuario = $_GET["idUsuario"];
$bd = include_once "../bd.php";
$sentencia = $bd->prepare("select id_usuario, nombre_usuario, apellido_usuario, correo_usuario, password_usuario, tipo_usuario, nombre_tipo_usuario from usuario INNER JOIN tipo_usuario ON usuario.tipo_usuario = tipo_usuario.id_tipo_usuario where id_usuario = ?");
$sentencia->execute([$idUsuario]);
$usuario = $sentencia->fetchObject();
echo json_encode($usuario);

//SELECT nombre_usuario, apellido_usuario, correo_usuario, nombre_tipo_usuario FROM usuario INNER JOIN tipo_usuario ON usuario.tipo_usuario = tipo_usuario.id_tipo_usuario
