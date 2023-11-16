<?php
// Recoge los datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

// Dirección de correo electrónico a la que se enviará el mensaje
$destinatario = 'tucorreo@ejemplo.com';

// Asunto del correo electrónico
$asunto = 'Mensaje enviado desde la página web';

// Cuerpo del correo electrónico
$mensajeCorreo = "Nombre: $nombre\n";
$mensajeCorreo .= "Email: $email\n\n";
$mensajeCorreo .= "Mensaje:\n$mensaje\n";

// Encabezados del correo electrónico
$headers = "From: $nombre <$email>";

// Envía el correo electrónico
mail($destinatario, $asunto, $mensajeCorreo, $headers);

// Redirecciona al usuario a una página de confirmación
header('Location: confirmacion.html');
?>
