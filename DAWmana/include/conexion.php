<?php
/**
 * Created by PhpStorm.
 * User: maze
 * Date: 05/12/2016
 * Time: 10:01
 */

function conectaDb($database, $usuario, $pass)
{
    try {
        $db = new PDO('mysql:host=localhost;
        dbname='.$database, $usuario, $pass,
            array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8")
        );
        return ($db);

    } catch (PDOException $e) {
        print "<p>Error: No puede conectarse con la base de datos.</p>\n";
        exit();
    }
}
