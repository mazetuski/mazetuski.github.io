<?php
/**
 * Created by PhpStorm.
 * User: maze
 * Date: 26/02/2017
 * Time: 11:03
 */

require_once("../include/conexion.php");

$db = conectaDb("dbdawmana", "usrdawmana", "12345678a");

$query = $db->query("SELECT nombre, apellidos, empresa, patrocinador, fechapref, observacion, foto FROM ponentes");
$query->setFetchMode(PDO::FETCH_ASSOC);
foreach ($query as $ponentes)
    $arrayPonentes[] = array(
        "nombre" => $ponentes['nombre'],
        "apellidos" => $ponentes['apellidos'],
        "empresa" => $ponentes['empresa'],
        "patrocinador" => $ponentes['patrocinador'],
        "fechapref" => $ponentes['fechapref'],
        "observacion" => $ponentes['observacion'],
        "foto" => $ponentes['foto']
    );

echo json_encode($arrayPonentes);