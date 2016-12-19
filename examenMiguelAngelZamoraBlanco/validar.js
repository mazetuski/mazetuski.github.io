/**
 * Created by MIGUEL ÁNGEL ZAMORA BLANCO on 15/12/2016.
 */

let arrayLetras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
/**
 * Objeto que guarda todos los patrones y errores al validar un formulario.
 * @constructor
 */
let Expresiones = function () {
    Expresiones.prototype.patrones = {
        'nombre': /^[A-Z][a-z]{3,}\s[A-Z][a-z]{3,}$/,
        'fecha': /^\d{2}[\/]\d{2}[\/]\d{4}$/,
        'dni': /^(\d){8}([A-z])$/
    };

    Expresiones.prototype.mensajeError = {
        'nombre': "El nombre y el apellido debe empezar por mayúscula y deben tener un mínimo de 4 letras",
        'fecha': "El formato de la fecha debe ser xx/xx/xxxx",
        'dni': "El dni debe seguir el formato 12345678Z"
    };
}
/**
 * Función que devuelve un patrón y un error depende del índice.
 * @param index Indice del patron y del error.
 * @returns {*[]} n array con el patron y el error.
 */
Expresiones.prototype.getExpresion = function (index) {
    return [Expresiones.prototype.patrones[index], Expresiones.prototype.mensajeError[index]];
}

let expresionMaze = new Expresiones();

/**
 * Objeto Validar que guarda un patrón y un error.
 * @param obj Objeto que se va a comprobar el patrón.
 * @constructor
 */
function Validar(obj) {
    this.patron = expresionMaze.getExpresion(obj.id)[0];
    this.mensaje = expresionMaze.getExpresion(obj.id)[1];
    this.obj = obj;
}

/**
 * Función que comprueba si el valor del objeto cumple el botón.
 * @returns {*} Devuelve una cadena con el error si no lo cumple, y una string vacía si lo cumple.
 */
Validar.prototype.comprobarPatron = function () {
    if (!this.patron.test(this.obj.value))
        return this.mensaje;
    return "";
}

/**
 * Función que comprueba si el valor del objeto esta vacío.
 * @returns {*} Devuelve una cadena con el error si no lo cumple, y una string vacía si lo cumple.
 */
Validar.prototype.comprobarVacio = function () {
    if (this.obj.value.length == 0)
        return this.obj.id + " no puede estar vacío";
    return "";
}

/**
 * Funcion que comprueba si una fecha es válida.
 * @returns {*} Devuelve el una cadena con el error si no lo cumple, y una string vacía si lo cumple.
 */
Validar.prototype.comprobarFecha = function () {
    let fecha = this.obj.value;
    let fechaArr = fecha.split("/");
    let dia = parseInt(fechaArr[0]);
    let mes = parseInt(fechaArr[1]) - 1;
    let anio = parseInt(fechaArr[2]);
    let fechaComprobar = new Date(anio, mes, dia);
    if (dia != fechaComprobar.getDate() || mes != fechaComprobar.getMonth() || anio != fechaComprobar.getFullYear())
        return "La fecha es inválida";
    return "";
}

/**
 * Función que comprueba la letra de un dni.
 * @returns {*} Devuelve una cadena con el error si no lo cumple, y una string vacía si lo cumple.
 */
Validar.prototype.comprobarLetraDni = function () {
    let numeroDni = this.obj.value.substr(0, 8);
    let letraDni = this.obj.value.substr(8, 1);
    letraDni = letraDni.toUpperCase();
    if (arrayLetras[numeroDni % 23] != letraDni)
        return "La letra no es correcta";
    return "";
}
