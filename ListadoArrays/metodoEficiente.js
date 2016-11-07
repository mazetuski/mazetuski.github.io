/**
 * Created by Miguel Ángel Zamora Blanco on 07/11/2016.
 * Averigua qué método es el más eficiente para manejarse con arrays.  Compruébalo mediante performance.now() o similares
 * Introduce 10 elementos en un array mediante push(), unshift(), directamente, fijando tamaño en new Array...
 * Eliminar 10 elementos en un array mediante pop(), shift(), directamente, fijando tamaño...
 */

{
    console.log("Que metodo es el mas eficiente entre: Push, Shift, Pop, UnShift");
    tPush0 = performance.now();
    let rellenaConPush = function () {
        let array = [];
        for (let i = 0; i < 10; i++)
            array.push(i);
        return array;
    }
    let arrayConPush = rellenaConPush();
    let tPush1 = performance.now();
    tUnShift0 = performance.now();
    let rellenaConUnShift = function () {
        let array = [];
        for (let i = 0; i < 10; i++)
            array.unshift(i);
        return array;
    }
    let arrayConUnShift = rellenaConUnShift();
    let tUnShift1 = performance.now();
    let tPop0 = performance.now();
    let eliminaConPop = function (array) {
        for (let i = 0; i < array.length; i++)
            array.pop();
        return array;
    }
    eliminaConPop(arrayConPush);
    let tPop1 = performance.now();
    let tShift0 = performance.now();
    let eliminaConShift = function (array) {
        for (let i = 0; i < array.length; i++)
            array.shift();
        return array;
    }
    eliminaConPop(arrayConUnShift);
    let tShift1 = performance.now();
    let tiempoPush = tPush1 - tPush0;
    let tiempoUnShift = tUnShift1 - tUnShift0;
    let tiempoPop = tPop1 - tPop0;
    let tiempoShift = tShift1 - tShift0;
    console.log("Push: " + tiempoPush + "ms");
    console.log("Shift: " + tiempoShift + "ms");
    console.log("Pop: " + tiempoPop + "ms");
    console.log("UnShift: " + tiempoUnShift + "ms");
    if (tiempoPush < tiempoShift && tiempoPush < tiempoUnShift && tiempoPush < tiempoPop)
        console.log("Push es el mas eficiente con un tiempo de: " + tiempoPush + "ms");
    else if (tiempoShift < tiempoPush && tiempoShift < tiempoUnShift && tiempoShift < tiempoPop)
        console.log("Shift es el mas eficiente con un tiempo de: " + tiempoShift + "ms");
    else if (tiempoPop < tiempoPush && tiempoPop < tiempoUnShift && tiempoPop < tiempoShift)
        console.log("Pop es el mas eficiente con un tiempo de: " + tiempoPop + "ms");
    else
        console.log("UnShift es el mas eficiente con un tiempo de: " + tiempoUnShift + "ms");
}