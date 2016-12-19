/**
 * Created by MIGUEL ÁNGEL ZAMORA BLANCO on 15/12/2016.
 */

{

    let nombre;
    let fecha;
    let dni;
    let check;
    let errorNombre;
    let errorFecha;
    let errorDni;
    let errorCheck;
    let botonNuevoEmpleado;
    let validaciones = [];

    /**
     * Función que comprueba si hay errores en el formulario.
     * @param cajaError Caja donde se escribe el error.
     */
    let comprobarError = function (cajaError) {
        let validar = new Validar(this);
        cajaError.innerHTML = validar.comprobarVacio() || validar.comprobarPatron();
        if (this == fecha)
            cajaError.innerHTML = cajaError.innerHTML || validar.comprobarFecha();
        if (this == dni)
            cajaError.innerHTML = cajaError.innerHTML || validar.comprobarLetraDni();
        if (cajaError.innerHTML != "")
            validaciones.push(this);
    }

    /**
     * Función que comprueba que el check esta clickado.
     * @param cajaError Caja donde se escribe el error si no esta clickado.
     */
    let comprobarCheck = function (cajaError) {
        if (this.checked)
            cajaError.innerHTML = "";
        else {
            cajaError.innerHTML = "Debes aprobar las condiciones";
            validaciones.push(this);
        }
    }

    /**
     * Función que comprueba todos los errores.
     */
    let comprobarTodo = function () {
        validaciones = [];
        comprobarError.bind(nombre, errorNombre)();
        comprobarError.bind(fecha, errorFecha)();
        comprobarError.bind(dni, errorDni)();
        comprobarCheck.bind(check, errorCheck)();
    }

    /**
     * Función que limpia el formulario.
     */
    let limpiarFormulario = function () {
        nombre.value = "";
        fecha.value = "";
        dni.value = "";
        check.checked = false;
    }

    /**
     * Función que crea un empleado nuevo a partir del formulario.
     */
    let crearEmpleado = function () {
        comprobarTodo();
        switch (validaciones.length) {
            case 0:
                let empleado = new Empleado(nombre.value, fecha.value, dni.value);
                empleado.crearNuevaVentana();
                limpiarFormulario();
                break;
            default:
                validaciones[0].focus();
        }
    }

    /**
     * Función que carga los elementos del arbol dom y añade los eventos.
     */
    let init = function () {
        nombre = document.getElementById("nombre");
        fecha = document.getElementById("fecha");
        dni = document.getElementById("dni");
        check = document.getElementById("check");
        errorNombre = document.getElementById("nombreError");
        errorFecha = document.getElementById("fechaError");
        errorDni = document.getElementById("dniError");
        errorCheck = document.getElementById("checkError");
        botonNuevoEmpleado = document.getElementById("nuevoEmpleado");

        nombre.addEventListener("blur", comprobarError.bind(nombre, errorNombre));
        fecha.addEventListener("blur", comprobarError.bind(fecha, errorFecha));
        dni.addEventListener("blur", comprobarError.bind(dni, errorDni));
        check.addEventListener("blur", comprobarCheck.bind(check, errorCheck));
        botonNuevoEmpleado.addEventListener("click", crearEmpleado);
    }

    window.onload = init;
}