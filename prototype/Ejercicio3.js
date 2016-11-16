/**
 * Created by Miguel Ángel Zamora Blanco on 15/11/2016.
 */


Array.prototype.existe = function (elemento) {
    for (let i = 0; i < this.length; i++)
        if (this[i] === elemento)
            return true;
    return false;
}

Array.prototype.anadir = function (elemento, permiteDuplicar) {
    let permitir = (permiteDuplicar == null) ? true : permiteDuplicar;
    if (!permitir) {
        if (!this.existe(elemento))
            this.push(elemento)
    } else
        this.push(elemento);
}

{
    let array = [];

    let init = function () {
        let elemento = document.getElementById("elemento");
        let permitir = document.getElementById("permitir");
        let annadir = document.getElementById("annadir");
        let contenedor = document.getElementById("contenedor");

        annadir.addEventListener("click", annadirAlArray);

    }

    let mostrarArray = function () {
        let mensaje = "";
        for (elem of array)
            mensaje += " " + elem;
        return mensaje;
    }

    let annadirAlArray = function () {
        array.anadir(elemento.value, permitir.checked);
        contenedor.innerHTML = "Array:" + mostrarArray();
    }



    window.onload = init;
}