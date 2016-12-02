/**
 * Created by Miguel Ángel Zamora Blanco on 01/12/2016.
 * Entrega una página donde demuestres el uso/comportamiento de todos los eventos del Ratón.
 */

{
    let generarNumero = function () {
        return parseInt(Math.random() * 6);
    }

    let generarColor = function () {
        let colores = ["red", "black", "blue", "yellow", "green"];
        this.style.backgroundColor = colores[generarNumero()];
    }

    let init = function () {
        let areaClick = document.getElementById("click");
        let areaDobleClick = document.getElementById("dblclick");
        let areaMouseDown = document.getElementById("mousedown");
        let areaMouseOut = document.getElementById("mouseout");
        let areaMouseOver = document.getElementById("mouseover");
        let areaMouseUp = document.getElementById("mouseup");
        let areaMouseMove = document.getElementById("mousemove");
        let areaMouseLeave = document.getElementById("mouseleave");
        let areaMouseEnter = document.getElementById("mouseenter");

        areaClick.addEventListener("click", generarColor.bind(areaClick));
        areaDobleClick.addEventListener("dblclick", generarColor.bind(areaDobleClick));
        areaMouseDown.addEventListener("mousedown", generarColor.bind(areaMouseDown));
        areaMouseOut.addEventListener("mouseout", generarColor.bind(areaMouseOut));
        areaMouseOver.addEventListener("mouseover", generarColor.bind(areaMouseOver));
        areaMouseUp.addEventListener("mouseup", generarColor.bind(areaMouseUp));
        areaMouseMove.addEventListener("mousemove", generarColor.bind(areaMouseMove));
        areaMouseLeave.addEventListener("mouseleave", generarColor.bind(areaMouseLeave));
        areaMouseEnter.addEventListener("mouseenter", generarColor.bind(areaMouseEnter));
    }

    window.onload = init;
}