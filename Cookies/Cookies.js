/**
 * Created by Miguel Ángel Zamora Blanco on 05/12/2016.
 * Crea una página debidamente diseñada que solicite el nombre del usuario y la contraseña. Si existiera alguna cookie almacenada, mostraría sus datos.
 * Dispondrá además de los siguientes botones:
 * Botón limpiar para borrar los datos (también borrará la cookie)
 * Botón entrar para entrar en el sitio.
 * Al activar entrar validará los datos.
 * El nombre del usuario ha de tener un mínimo de 5 caracteres, puede contener números o letras ( mayúsculas o minúsculas), guiones o subrayados
 * La contraseña ha de ser lo suficientemente robusta. Tendrá un mínimo de 6 caracteres y ha de tener al menos un dígito, una letra y un carácter especial ($%@#)
 * En el caso en que el nombre del usario o la contraseña no sean válidos, devolverá el foco a la caja de texto en cuestión con un mensaje de error en la propia caja.
 * Si todo va bien, abre una nueva ventana con los datos leídos desde la cookie.
 */


{
    let cajaUsuario;
    let cajaPass;
    let botonLogin;
    let botonLimpiar;
    let errorUsuario;
    let errorPass;
    let validaciones = [];

    let setCookie = function (name, value, days) {
        let diasAMilisegundos = new Date(Date.now() + (days * 24 * 60 * 60 * 1000));
        document.cookie = name + "=" + value + "; expires = " + diasAMilisegundos.toUTCString() + ";path=/";
    }

    let getCookie = function (nombre) {
        let name = nombre + "=";
        let cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            let c = cookies[i];
            if (c.charAt(0) === ' ')
                c = c.substring(1);
            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length);
        }
        return "";
    }

    let existeCookie = function (nameCookie) {
        let cookie = getCookie(nameCookie);
        return (cookie !== "") ? true : false;
    }

    let asignarUsuarioYPassword = function () {
        if (existeCookie(cajaUsuario.id) && existeCookie(cajaPass.id)) {
            cajaUsuario.value = getCookie(cajaUsuario.id);
            cajaPass.value = getCookie(cajaPass.id);
        }
    }

    let comprobarError = function (error) {
        let validar = new Validar(this);
        error.innerHTML = validar.comprobarSiVacio() || validar.comprobarRegex();
        if (error.innerHTML.length > 0)
            validaciones.push(this);
        else
            setCookie(this.id, this.value, 5);
    }

    let comprobarTodo = function () {
        comprobarError.bind(cajaUsuario, errorUsuario)();
        comprobarError.bind(cajaPass, errorPass)();
        switch (validaciones.length) {
            case 0:
                let nuevaVentana = window.open("", " ", "top=20, left=20, width=300, height=300");
                let contenedor = document.createElement("div");
                let parrafo = document.createElement("p");
                let texto = document.createTextNode("Bienvenido " + getCookie(cajaUsuario.id) + ", su contraseña es: " + getCookie(cajaPass.id));
                parrafo.appendChild(texto);
                contenedor.appendChild(parrafo);
                nuevaVentana.document.body.appendChild(contenedor);
                break;
            default:
                validaciones[0].focus();
                validaciones = [];
        }

    }

    let limpiar = function () {
        setCookie(cajaUsuario.id, "", -1);
        setCookie(cajaPass.id, "", -1);
        cajaUsuario.value = "";
        cajaPass.value = "";
    }

    let init = function () {
        cajaUsuario = document.getElementById("user");
        cajaPass = document.getElementById("password");
        botonLogin = document.getElementById("login");
        botonLimpiar = document.getElementById("limpiar");
        errorUsuario = document.getElementById("errorUsuario");
        errorPass = document.getElementById("errorPass");

        asignarUsuarioYPassword();
        botonLogin.addEventListener("click", comprobarTodo);
        botonLimpiar.addEventListener("click", limpiar);
    }

    window.onload = init;
}