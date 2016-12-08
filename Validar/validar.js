/**
 * Created by Miguel Ángel Zamora Blanco on 01/12/2016.
 */


let Expresiones = function () {
    Expresiones.prototype.expresiones = {
        'nombre': /^[A-Z]+[a-z]{3,}(\s[A-z]*)?$/,
        'apellido': /^[A-z]+(\s[A-z]*)?$/,
        'email': /^(\w+(\.)?[\w]+)+@\w+\.(com|es)$/,
        'dni': /^\d{8}[ -]?[A-z]$/,
        'fecha': /^\d{2}[\/]\d{2}[\/]\d{4}$/,
        'telefono': /^\d{9}$/,
        'cuenta': /^\d{4}(-)?\d{4}(\1)\d{2}(\1)\d{10}$/,
        'url': /^(http:\/\/|https:\/\/)?(www.)?\w+\.(com|es|org|net|biz|edu|gov|info|int|name|tv)$/,
        'password': /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\.@#$%^&+=])(?=\S+$).{6,}$/,
        'user': /^(?=.*[0-9])?(?=.*[a-z])(?=.*[A-Z])?(?=.*[_-])?.{5,}$/
    };
    Expresiones.prototype.errores = {
        'nombre': "La primera letra del nombre debe ser mayúscula y el primer nombre debe tener una longiud de al menos 4 letras.",
        'apellido': "La primera letra del apellido debe ser mayúscula y debe tener al menos 4 letras",
        'email': "Debe cumplir con el patrón usuario@correo.com",
        'dni': "Debe tener 8 números seguidos de una letra",
        'fecha': "Debe seguir el formato 01/01/2000",
        'telefono': "Debe tener un formato de 9 números",
        'cuenta': "Debe seguir el formato 1234-1234-12-1234567890",
        'url': "Debe seguir el formato http://www.hola1.com, no es necesario http://, ni www.",
        'password': "La contraseña debe contener al menos 6 carácteres, una letra mayúscula, una minúscula, un número y un carácter especial.",
        'user': "El usuario debe tener mínimo 5 carácteres, puede contener mayúsculas, minúsculas, números, guiones y subrayados."
    };

    Expresiones.prototype.getExpresionYError = function (indice) {
        return [Expresiones.prototype.expresiones[indice], Expresiones.prototype.errores[indice]];
    }
}

let expresiones = new Expresiones();

/**
 * Clase Validar.
 */
class Validar {
    constructor(obj) {
        this.obj = obj;
        this.patron = expresiones.getExpresionYError(obj.id)[0];
        this.error = expresiones.getExpresionYError(obj.id)[1];
    }

    comprobarRegex() {
        if (!this.patron.test(this.obj.value))
            return this.error;
        return "";
    }

    comprobarSiVacio() {
        if (this.obj.value.length == 0)
            return this.obj.id + " no puede estar vacío";
        return "";
    }
}

