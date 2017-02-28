<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.26/jquery.form-validator.min.js"></script>
    <script type="text/javascript" src="js/validar.js"></script>
</head>

<?php
/**
 * Created by PhpStorm.
 * User: maze
 * Date: 26/02/2017
 * Time: 12:24
 */

require_once("../include/conexion.php");

$db = conectaDb("dbdawmana", "usrdawmana", "12345678a");

if (isset($_POST['registrar'])) {
    $query = "INSERT INTO asistentes (nombre, apellidos, dni, email, procedencia) VALUES (:nombre, :apellidos, :dni, :email, :procedencia)";
    $result = $db->prepare($query);
    if ($result->execute(array(
        ":nombre" => $_POST['nombre'],
        ":apellidos" => $_POST['apellido'],
        ":dni" => $_POST['dni'],
        ":email" => $_POST['email'],
        ":procedencia" => $_POST['procedencia']
    )))
        header("Location: ../index.php?result=1");
    else
        header("Location: ../index.php?result=0");
}
echo "<form id='formRegistro' action='php/registro.php' method='post'>
    <h2 class='centrar'>Registro Asistentes</h2>
    <p><label>Nombre</label> <input type='text' name='nombre' data-validation='custom' data-validation-regexp='^[A-Z][a-z]{3,}(\s[A-Z][a-z]{2,})*$' data-validation-help='Mínimo de 3 letras' data-validation-error-msg='Nombre no válido' required></p>
    <p><label>Apellidos</label> <input type='text' name='apellido' data-validation='custom' data-validation-regexp='^[A-Z][a-z]{3,}(\s[A-Z][a-z]{2,})*$' data-validation-help='Mínimo de 3 letras' data-validation-error-msg='Apellido no válido' required></p>
    <p><label>DNI</label> <input type='text' name='dni'></p>
    <p><label>Email</label> <input type='email' name='email' data-validation='custom' data-validation-regexp='^(\w+(\.)?[\w]+)+@\w+\.(com|es)$' data-validation-help='Formato válido xxxx@xxxx.com' data-validation-error-msg='Correo no válido'  required></p>
    <p><label>Procedencia</label> <input type='text' name='procedencia' required></p>
    <p><input type='submit' name='registrar' value='Registrarse'></p>
</form>";
?>
</html>