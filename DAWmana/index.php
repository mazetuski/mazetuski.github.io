<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
    <meta charset="UTF-8">
    <title>Miguel Ángel Zamora Blanco</title>
    <link rel="stylesheet" href="css/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Sansita" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="js/jquery-ui-dialog/jquery-ui.css">
    <link rel="stylesheet" href="css/estilo.css">
    <script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.26/jquery.form-validator.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui-dialog/jquery-ui.min.js"></script>
    <script type="text/javascript" src="js/dawmana.js"></script>
</head>
<body>
<?php
/**
 * Created by PhpStorm.
 * User: maze
 * Date: 26/02/2017
 * Time: 12:32
 */

require_once("include/conexion.php");
session_start();

$db = conectaDb("dbdawmana", "usrdawmana", "12345678a");
if (!isset($_SESSION['perfil']))
    $_SESSION['perfil'] = "invitado";

if (isset($_POST['login'])) {
    $query = $db->query("SELECT * FROM ponentes");
    $query->setFetchMode(PDO::FETCH_ASSOC);
    foreach ($query as $ponente)
        if ($ponente['usuario'] == $_POST['user'] && $ponente['pass'] == $_POST['pass']) {
            $_SESSION['perfil'] = "ponente";
            $_SESSION['idUsuario'] = $ponente['id'];
        }

}

if (isset($_GET['logout']) && $_GET['logout'] == 1) {
    $_SESSION['perfil'] = "invitado";
    $_SESSION['idUsuario'] = "";
}

if(isset($_GET['result'])) {
    if ($_GET['result'] == 1)
        echo "<div class='dialogAccion' title='Acción con éxito'>La acción ha sido realizada con éxito</div>";
    if ($_GET['result'] == 0)
        echo "<div class='dialogAccion' title='Error'>Ha ocurrido un error al realizar la acción</div>";
}

?>
<noscript><h3>Tu navegador no admite JavaScript</h3></noscript>
<header>
    <div id="dialog" title="Cookies desactivadas">No tienes activadas las cookies</div>
    <h3 class="grande">Menú</h3><a class="peque"><i id="hamburguesa" class="fa fa-bars fa-2x"
                                                    aria-hidden="true"></i></a>

    <h3>DAWmana 2017</h3>
</header>
<div id="contenedor">
    <nav>
        <ul>
            <li><a href="#" id="botonInicio">Inicio</a></li>
            <li><a href="#" id="botonPonentes">Ponentes</a></li>
            <li><a href="#" id="botonActividades">Actividades</a></li>
            <?php
            if ($_SESSION['perfil'] == "ponente")
                echo "<li><a href='#' id='botonRegistroActividad'>Registro actividad</a></li>";
            else
                echo "<li><a href='#' id='botonRegistroAsistentes'>Registro asistentes</a></li>";
            ?>
        </ul>
        <?php
        echo "<form id='loginPonentes' action='index.php' method='post' >";
        if ($_SESSION['perfil'] == "invitado")
                echo "<h4>Login Ponentes</h4>
                <p><label>Usuario</label><input type='text' name='user' data-validation='custom' data-validation-regexp='^[A-z]{4,}$' data-validation-help='Mínimo de 4 caracteres' data-validation-error-msg='usuario no válido' required></p>
                <p><label>Password</label><input type='password' name='pass' required></p>
                <p><input type='submit' name='login' value='Login'></p>";
        if ($_SESSION['perfil'] == "ponente")
            echo "<a href='index.php?logout=1'>Logout</a>";
        echo "</form>";
        ?>
    </nav>

    <main>
        <?php
        if ($_SESSION['perfil'] == "invitado")
            echo "<img id='cartel' src='images/CartelSysmana17.jpg'>";
        if ($_SESSION['perfil'] == "ponente"){
            $query = $db->query("SELECT * FROM ponentes WHERE id = ".$_SESSION['idUsuario']);
            $query->setFetchMode(PDO::FETCH_ASSOC);
            echo "<div id='ponenteLogContenedor'>";
            foreach($query as $ponente) {
                $foto = "images/".$ponente['foto'];
                echo "<img src='$foto'>
                      <p>Nombre: " . $ponente['nombre'] . "</p>
                      <p>Apellido: " . $ponente['apellidos'] . "</p>
                      <p>Empresa: " . $ponente['empresa'] . "</p>
                      <p>Patrocinador: " . $ponente['patrocinador'] . "</p>
                      <p>Fecha preferible: " . $ponente['fechapref'] . "</p>
                      <p>Observación: " . $ponente['observacion'] . "</p>";
                }
            echo "</div>";
        }
        ?>
    </main>

</div>
</body>
</html>