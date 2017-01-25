/**
 * Created by Miguel Ángel Zamora Blanco on 21/01/2017.
 */

$(document).ready(function(){
   $("#enlaceTodo").click(function(e){
       e.preventDefault();
       window.open("ventanaTodoUnPoco.html", "");

   }) ;

    $("#botonEmpleado").click(function(){
        window.open("formularioEmpleado.html", "Empleado")
    })
});