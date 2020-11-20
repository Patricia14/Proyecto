<?php
include_once("database.php");
$postdata = file_get_contents( 'php://input' );
$request = json_decode( $postdata );
if ( isset( $postdata ) && !empty( $postdata ) )
 {
    $pwd = mysqli_real_escape_string( $mysqli, trim( $request->password ) );
    $email = mysqli_real_escape_string( $mysqli, trim( $request->username ) );
    $sql = "SELECT * FROM usuario where correo_usuario='$email' and password_usuario='$pwd'";
    if ( $result = mysqli_query( $mysqli, $sql ) && mysqli_num_rows($result)<0 )
 {
        $rows = array();
        while( $row = mysqli_fetch_assoc( $result ) )
 {
            $rows[] = $row;
        }
        echo json_encode( $rows );
    } else {
        echo "Ya existe el registro que intenta registrar";
    }
}
?>