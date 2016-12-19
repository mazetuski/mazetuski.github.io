/**
 * Created by MIGUEL ÁNGEL ZAMORA BLANCO on 15/12/2016.
 */

/**
 * Empleado
 * @param nombre Nombre del empleado.
 * @param fecha FEcha de nacimiento.
 * @param dni Dni del empleado
 * @constructor
 */
function Empleado(nombre, fecha, dni) {
    this.nombre = nombre;
    this.fecha = fecha;
    this.dni = dni;
}

/**
 * Función crearNuevaVentana que crea una nueva ventana y muestra los datos del empleado.
 */
Empleado.prototype.crearNuevaVentana = function () {
    let fechaActual = new Date();
    let fechaFinAnio = new Date(2016, 11, 31);
    let diasRestantes = fechaFinAnio - fechaActual;
    diasRestantes = Math.floor((diasRestantes / 1000) / 60 / 60 / 24);
    let nuevaVentana = window.open("", "NuevoEmpleado");
    nuevaVentana.document.write("<h1>Miguel Ángel Zamora Blanco</h1>" +
        "<p>Nombre: " + this.nombre + "</p>" +
        "<p>Fecha Nacimiento: " + this.fecha + "</p>" +
        "<p>Dni: " + this.dni + "</p>" +
        "<p>Dias hasta fin de año: " + (diasRestantes + 1) + "</p>");
}
