<?php
include_once("../login/database.php");
$postdata = file_get_contents( 'php://input' );
$request = json_decode( $postdata );
if ( isset( $postdata ) && !empty( $postdata ) )
 {
    $idUsuario = mysqli_real_escape_string( $mysqli, trim( $request->id_usuario ) );
    $sql = "SELECT usuario.nombre_usuario, mascota.id_mascota, mascota.nombre_mascota FROM usuario INNER JOIN mascota ON usuario.id_usuario = mascota.id_cliente WHERE mascota.id_cliente='$idUsuario'";
    if ( $result = mysqli_query( $mysqli, $sql ) )
 {
        $rows = array();
        while( $row = mysqli_fetch_assoc( $result ) )
 {
            $rows[] = $row;
        }
        echo json_encode( $rows );
    } else {
        http_response_code( 404 );
    }
}
?>
