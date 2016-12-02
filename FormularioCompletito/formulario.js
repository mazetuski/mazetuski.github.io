/**
 * Created by Miguel Ángel Zamora Blanco on 28/11/2016.
 * Crea un formulario con todos los tipos de controles y realiza todas las validaciones posibles mediante JavaScript.
 * Utiliza el modelo de registro avanzado de eventos según W3C (addEventListener), así como las expresiones regulares.
 * Asegúrate de validar lo siguiente:
 * Obligatoriedad (campo de texto, opción seleccionada (checkbox, radio button y selección)
 * Tipo de dato introducido (numérico...)
 * Dirección de correo válida
 * Número de DNI válido
 * Fecha válida
 * Número de teléfono
 * Número de cuenta corriente
 * URL
 * Asegúrate de que:
 * Al perder el foco de cada control se comprueba su validación.
 * Los errores los muestras mediante css.
 * Al enviar el formulario se realizan TODAS LAS VALIDACIONES, yéndose el foco al primer error.
 */


{
    let dni;
    let fecha;
    let telefono;
    let nombre;
    let apellidos;
    let email;
    let sexo;
    let sexo1;
    let cuenta;
    let url;
    let idiomas;
    let enviar;
    let errorNombre;
    let errorApellido;
    let errorEmail;
    let errorDni;
    let errorFecha;
    let errorTel;
    let errorCuenta;
    let errorUrl;
    let errorSexo;
    let errorIdiomas;

    /**
     * Función que comprueba si la letra del dni es correcta.
     * @returns {*} Un mensaje de error si no es correcta, mensaje vacío en caso contrario.
     */
    let comprobarLetraDni = function () {
        let letrasDni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        let numeroDni = dni.value.substr(0, 8);
        let letra = dni.value.substr(dni.value.length - 1, 1);
        if (letrasDni[numeroDni % 23] !== letra.toUpperCase())
            return "La letra no es correcta";
        return "";
    }

    /**
     * Función que comprueba el número de control de una cuenta bancaria.
     * @returns {*} Un mensaje de error si no es correcta, mensaje vacío en caso contrario.
     */
    let comprobarNumeroControlCuenta = function () {
        let bases = [1, 2, 4, 8, 5, 10, 9, 7, 3, 6];
        let primerNumeroControl = 0;
        let segundoNumeroControl = 0;
        let numeroIzq;
        let numeroDer;
        let numeroControl;
        let numeroControlCliente;
        if (cuenta.value.charAt(4) === '-') {
            let numeroCompleto = cuenta.value.split("-");
            numeroIzq = "00".concat(numeroCompleto[0].concat(numeroCompleto[1]));
            numeroDer = numeroCompleto[3];
            numeroControl = numeroCompleto[2];
        } else {
            numeroIzq = "00".concat(cuenta.value.substr(0, 8));
            numeroDer = cuenta.value.substr(10, 10);
            numeroControl = cuenta.value.substr(8, 2);
        }
        for (let i = 0; i < bases.length; i++) {
            primerNumeroControl += bases[i] * parseInt(numeroIzq.charAt(i));
            segundoNumeroControl += bases[i] * parseInt(numeroDer.charAt(i));
        }
        primerNumeroControl = 11 - (primerNumeroControl % 11);
        segundoNumeroControl = 11 - (segundoNumeroControl % 11);
        numeroControlCliente = primerNumeroControl + "" + segundoNumeroControl;
        if (numeroControlCliente !== numeroControl)
            return "El número de control no es correcto, (Tercer número) 0000-0000-<b>(00)</b>-0000000000";
        return "";
    }

    /**
     * Función que comprueba si una fecha es válida.
     * @returns {*} Un mensaje de error si no es correcta, mensaje vacío en caso contrario.
     */
    let comprobarFechaValida = function () {
        let fechaCompleta = fecha.value.split("/");
        let dia = parseInt(fechaCompleta[0]);
        let mes = parseInt(fechaCompleta[1]) - 1;
        let anio = parseInt(fechaCompleta[2]);
        let fechaDate = new Date(anio, mes, dia);
        if (dia !== fechaDate.getDate() || mes !== fechaDate.getMonth() || anio !== fechaDate.getFullYear())
            return "Fecha inválida";
        return "";
    }

    /**
     * Función que comprueba si hay errores en los diferentes inputs a través de la clase Validar.
     * @param error Caja donde se escribe el error.
     */
    let comprobarError = function (error) {
        let validar = new Validar(this);
        error.innerHTML = validar.comprobarSiVacio() || validar.comprobarRegex();
        switch (this) {
            case dni:
                error.innerHTML = error.innerHTML || comprobarLetraDni();
                break;
            case cuenta:
                error.innerHTML = error.innerHTML || comprobarNumeroControlCuenta();
                break;
            case fecha:
                error.innerHTML = error.innerHTML || comprobarFechaValida();
                break;
        }
    }

    /**
     * Función que comprueba que un input de tipo radio este seleccionado.
     * @param inputs Los distintos inputs de tipo radio.
     * @param error Caja donde se escribe el error.
     */
    let comprobarRadioInput = function (inputs, error) {
        let contador = 0;
        for (let i = 0; i < inputs.length; i++)
            if (inputs[i].checked)
                contador++;
        error.innerHTML = (contador > 0) ? " " : "Debes seleccionar uno";
    }

    /**
     * Función que comprueba que en un select haya al menos un option seleccionado.
     * @param error Caja donde se escribe el error.
     */
    let comprobarSelectInput = function (error) {
        let contador = 0;
        for (let i = 0; i < this.length; i++)
            if (this[i].selected)
                contador++;
        error.innerHTML = (contador > 0) ? " " : "Debes seleccionar uno";
    }

    /**
     * Función que comprueba todos los input utilizados.
     */
    let comprobarTodo = function () {
        comprobarError.bind(nombre, errorNombre)();
        comprobarError.bind(apellidos, errorApellido)();
        comprobarError.bind(email, errorEmail)();
        comprobarError.bind(dni, errorDni)();
        comprobarError.bind(fecha, errorFecha)();
        comprobarError.bind(telefono, errorTel)();
        comprobarError.bind(cuenta, errorCuenta)();
        comprobarError.bind(url, errorUrl)();
        comprobarRadioInput.bind(null, sexo, errorSexo)();
        comprobarSelectInput.bind(idiomas, errorIdiomas)();
    }

    let init = function () {
        nombre = document.getElementById("nombre");
        apellidos = document.getElementById("apellido");
        email = document.getElementById("email");
        dni = document.getElementById("dni");
        fecha = document.getElementById("fecha");
        telefono = document.getElementById("telefono");
        sexo = document.getElementsByName("sexo");
        sexo1 = document.getElementById("sexo1");
        cuenta = document.getElementById("cuenta");
        url = document.getElementById("url");
        idiomas = document.getElementById("idiomas");
        enviar = document.getElementById("enviar");
        errorNombre = document.getElementById("errorNombre");
        errorApellido = document.getElementById("errorApellido");
        errorEmail = document.getElementById("errorEmail");
        errorDni = document.getElementById("errorDni");
        errorFecha = document.getElementById("errorFecha");
        errorTel = document.getElementById("errorTel");
        errorCuenta = document.getElementById("errorCuenta");
        errorUrl = document.getElementById("errorUrl");
        errorSexo = document.getElementById("errorSexo");
        errorIdiomas = document.getElementById("errorIdiomas");

        nombre.addEventListener("focusout", comprobarError.bind(nombre, errorNombre));
        apellidos.addEventListener("focusout", comprobarError.bind(apellidos, errorApellido));
        email.addEventListener("focusout", comprobarError.bind(email, errorEmail));
        dni.addEventListener("focusout", comprobarError.bind(dni, errorDni));
        fecha.addEventListener("focusout", comprobarError.bind(fecha, errorFecha));
        telefono.addEventListener("focusout", comprobarError.bind(telefono, errorTel));
        cuenta.addEventListener("focusout", comprobarError.bind(cuenta, errorCuenta));
        url.addEventListener("focusout", comprobarError.bind(url, errorUrl));
        sexo1.addEventListener("focusout", comprobarRadioInput.bind(null, sexo, errorSexo));
        idiomas.addEventListener("focusout", comprobarSelectInput.bind(idiomas, errorIdiomas));

        enviar.addEventListener("click", comprobarTodo);

    }

    let Exception = function (message) {
        this.message = message;
    }

    window.onload = init;
}