/**
 * Created by Miguel Ángel Zamora Blanco on 26/12/2016.
 */

{
    let mostrar = true;
    let mostrarOcultar = function () {
        if (mostrar) {
            this.style.display = "block";
            mostrar = false;
        } else {
            this.style.display = "none";
            mostrar = true;
        }
    }

    let init = function () {
        let boton = document.getElementById("filtro");
        let navFiltro = document.getElementById("navFiltro");

        boton.addEventListener("click", mostrarOcultar.bind(navFiltro));
    }

    window.onload = init;
}