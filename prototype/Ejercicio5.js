/**
 * Created by Miguel Ángel Zamora Blanco on 15/11/2016.
 * Añadir a la clase Array un método llamado sin() que permita filtrar
 * los elementos del array original y obtenga un nuevo array con todos los valores diferentes al indicado:
 */

Array.prototype.sin = function(elemento){
    let array = [];
    for(let i=0; i<this.length; i++)
        if(this[i]!==elemento)
            array.push(this[i]);
    return array;
}

{
    let array = [1, 2, 3, 4, 5, 6, 7, 7, 6];

    let init = function(){
        let elemento = document.getElementById("elemento");
        let quitarElemento = document.getElementById("quitarElemento");
        let contenedorArrayPrincipal = document.getElementById("arrayPrincipal");
        let contenedorArrayCreado = document.getElementById("arrayCreado");
        contenedorArrayPrincipal.innerHTML = "Array: ["+mostrarArray(array)+"]";

        let quitarElementoYMostrar = function(){
            let arrayCreado = array.sin(parseInt(elemento.value));
            contenedorArrayCreado.innerHTML = "Array2: ["+mostrarArray(arrayCreado)+"]";
        }

        quitarElemento.addEventListener("click", quitarElementoYMostrar);

    }

    let mostrarArray = function (array) {
        let mensaje = "";
        for (elem of array)
            mensaje += " " + elem;
        return mensaje;
    }

    window.onload = init;
}