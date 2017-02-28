<?php
/**
 * Created by PhpStorm.
 * User: maze
 * Date: 27/02/2017
 * Time: 19:17
 */

require_once("../include/conexion.php");
$db = conectaDb("dbdawmana", "usrdawmana", "12345678a");

$query = $db->query("SELECT * FROM actividad");
$query->setFetchMode(PDO::FETCH_ASSOC);
foreach($query as $actividad) {
    $consulta = $db->query("SELECT nombre, apellidos FROM ponentes WHERE id=".$actividad['idPonente']);
    $consulta->setFetchMode(PDO::FETCH_ASSOC);
        foreach($consulta as $ponente) {
            $nombrePonente = $ponente['nombre'];
            $apellidoPonente = $ponente['apellidos'];
        }
    $arrayActividades[] = array(
        "nombrePonente" => $nombrePonente." ".$apellidoPonente,
        "nombre" => $actividad['nombre'],
        "descB" => $actividad['descripcion_breve'],
        "descE" => $actividad['descripcion_extensa'],
        "imagen" => $actividad['url'],
        "materialP" => $actividad['material_ponente'],
        "materialA" => $actividad['material_asistente'],
        "numAsist" => $actividad['numAsist'],
        "fecha" => $actividad['fecha'],
        "hora" => $actividad['hora'],
        "lugar" => $actividad['lugar'],
    );
}

echo json_encode($arrayActividades);