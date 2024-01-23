<?php
// Verificar si se ha enviado un archivo
if(isset($_FILES['archivo'])) {
    $archivo_nombre = $_FILES['archivo']['name'];
    $archivo_tipo = $_FILES['archivo']['type'];
    $archivo_tamano = $_FILES['archivo']['size'];
    $archivo_temporal = $_FILES['archivo']['tmp_name'];

    // Mover el archivo a una ubicación específica
    $directorio_destino = "form/";
    $ruta_destino = $directorio_destino . $archivo_nombre;

    if (move_uploaded_file($archivo_temporal, $ruta_destino)) {
        $respuesta = [
            'mensaje' => 'Archivo subido correctamente',
            'nombre' => $_POST['nombre'],
            'ruta' => $ruta_destino
        ];
    } else {
        $respuesta = ['error' => 'Error al subir el archivo'];
    }
} else {
    $respuesta = ['error' => 'No se ha enviado ningún archivo'];
}

// Devolver respuesta en formato JSON
header('Content-Type: application/json');
echo json_encode($respuesta);
?>