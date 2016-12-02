/**
 * Created by Miguel Ángel Zamora Blanco on 01/12/2016.
 * Página donde demuestres el uso/comportamiento de todos los eventos del Teclado.
 */

{
    let generarNumero = function () {
        return parseInt(Math.random() * 6);
    }

    let generarColor = function () {
        let colores = ["red", "black", "blue", "yellow", "green"];
        this.style.backgroundColor = colores[generarNumero()];
    }

    let init = function(){
        let areaKeyDown = document.getElementById("keydown");
        let areaKeyPress = document.getElementById("keypress");
        let areaKeyUp = document.getElementById("keyup");

        areaKeyDown.addEventListener("keydown", generarColor.bind(areaKeyDown));
        areaKeyPress.addEventListener("keypress", generarColor.bind(areaKeyPress));
        areaKeyUp.addEventListener("keyup", generarColor.bind(areaKeyUp));
    }

    window.onload = init;
}