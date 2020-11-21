<?php
//FALTA MODIFICAR QUERY ****
include_once("database.php");
$postdata = file_get_contents( 'php://input' );
if ( isset( $postdata ) && !empty( $postdata ) )
 {
    $request = json_decode( $postdata );
    $name = trim( $request->name );
    $apellido = trim( $request->apellido );
    $tipo = trim( $request->tipo );
    $pwd = mysqli_real_escape_string( $mysqli, trim( $request->pwd ) );
    $email = mysqli_real_escape_string( $mysqli, trim( $request->email ) );
    $sql = "INSERT INTO usuario(nombre_usuario, apellido_usuario, correo_usuario, password_usuario, tipo_usuario) VALUES ('$name','$apellido','$email','$pwd','$tipo')";
    if ( $mysqli->query( $sql ) === TRUE ) {
        $authdata = [
            'name' => $name,
            'pwd' => '',
            'email' => $email,
            'Id' => mysqli_insert_id( $mysqli )
        ];
        echo json_encode( $authdata );
    }else{
        http_response_code( 404 );
    }
}

?>