/**
 * Created by Miguel Ángel Zamora Blanco on 15/11/2016.
 * Implementa stripTags.
 */

String.prototype.stripTags = function () {
    return this.replace(/\<.*\>/gi, '');
}

{
    let init = function () {
        let cadena = document.getElementById("cadena");
        let quitarTags = document.getElementById("quitarTags");
        let contenedor = document.getElementById("contenedor");

        let quitarTagsDeString = function () {
            contenedor.innerHTML = cadena.value.stripTags();
        }

        quitarTags.addEventListener("click", quitarTagsDeString);
    }


    window.onload = init;
}