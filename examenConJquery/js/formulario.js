/**
 * Created by maze on 22/01/2017.
 */

$(document).ready(function(){
    $("#nuevoEmpleado").click(function(){
        let empleado = new Empleado($("#nombre").val(), $("#fecha").val(), $("#dni").val());
        empleado.crearNuevaVentana();
    });

    $("#nombre").valida({
        contenedor: $("#errorNombre")
    });

    $("#fecha").valida({
        patron: /^\d{2}[\/]\d{2}[\/]\d{4}$/,
        mensaje: "El formato de la fecha debe ser xx/xx/xxxx",
        contenedor: $("#fechaError")
    });

    $("#dni").valida({
        patron: /^(\d){8}([A-z])$/,
        mensaje: "El dni debe seguir el formato 12345678Z",
        contenedor: $("#dniError")
    });

    $("#check").valida({
        contenedor: $("#checkError")
    });
});