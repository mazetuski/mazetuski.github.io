<?php
/**
 * Created by PhpStorm.
 * User: maze
 * Date: 27/02/2017
 * Time: 17:42
 */

require_once("../include/conexion.php");
session_start();

$db = conectaDb("dbdawmana", "usrdawmana", "12345678a");

if (!isset($_SESSION['perfil']) || !isset($_SESSION['idUsuario']) || $_SESSION['perfil'] != "ponente")
    header("Location: ../index.php");

if(isset($_POST['crearActividad'])){
    $nombreArchivo = $_FILES['imagen']['name'];
    $fecha = getdate();
    $year = $fecha['year'];
    $mon = $fecha['mon'];
    $day = $fecha['mday'];
    $hour = $fecha['hours'];
    $min = $fecha['minutes'];
    $sec = $fecha['seconds'];
    $nombreFichero = $year . $mon . $day . $hour . $min . $sec . $nombreArchivo;
    $url = "../images/".$nombreFichero;
    $query = "INSERT INTO actividad (idPonente, nombre, descripcion_breve, descripcion_extensa, url, material_ponente, material_asistente, numAsist, fecha, hora, lugar)
              VALUES (:idPonente, :nombre, :descB, :descE, :url, :materialP, :materialA, :num, '', '', '')";
    $result = $db->prepare($query);
    if($result->execute(array(
        ":idPonente" => $_SESSION['idUsuario'],
        ":nombre" => $_POST['nombre'],
        ":descB" => $_POST['descBreve'],
        ":descE" => $_POST['descLarga'],
        ":url" => "images/".$nombreFichero,
        ":materialP" => $_POST['materialP'],
        ":materialA" => $_POST['materialA'],
        ":num" => $_POST['numero']
    ))) {
        move_uploaded_file($_FILES['imagen']['tmp_name'], $url);
        header("Location: ../index.php?result=1");
    }else
        header("Location: ../index.php?result=0");

}

if(isset($_SESSION['perfil']) && isset($_SESSION['idUsuario']) && $_SESSION['perfil'] == "ponente"){
    echo "<form action='php/actividad.php' method='post' id='formActividad' enctype='multipart/form-data'>
          <h2 class='centrar'>Registro Actividad</h2>
          <p><label>Nombre</label><input type='text' name='nombre'></p>
          <p><label>Material Ponente</label><input type='text' name='materialP'></p>
          <p><label>Material Asistente</label><input type='text' name='materialA'></p>
          <p><label>Nº Asistentes recomendados</label><input type='number' name='numero'></p>
          <p><label>Descripción breve</label><textarea maxlength='200' name='descBreve'></textarea></p>
          <p><label>Descripción extensa</label><textarea maxlength='400' name='descLarga'></textarea></p>
          <p><label>Imagen</label><input type='file' name='imagen' accept='image/*'></p>
          <p><input type='submit' name='crearActividad' value='Crear Actividad'></p>
</form>";
}
