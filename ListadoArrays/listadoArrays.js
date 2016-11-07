/**
 * Created by Miguel Ángel Zamora Blanco on 03/11/2016.
 */

{
    let muestraForEach = function (array) {
        array.forEach(function (elem) {
            console.log(elem);
        });
    }

//Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.
    console.log("\n1.- con forEach");
    let array = ["cero", "uno", "dos", "tres", "cuatro"];
    let muestraForEachConArgumentos = function (array) {
        array.forEach(function (elem, index, array) {
            console.log(index + " : " + elem);
        });
    }
    muestraForEachConArgumentos(array);
//Indica la utilidad del operador in con los arrays. Demuestra su uso mediante un ejemplo.
    console.log("\n2.- con For in");
    let muestraForIn = function (array) {
        for (index in array)
            console.log(array[index]);
    }

    muestraForIn(array);
//Indica la función que comprueba si un objeto es o no un Array. Demuestra su uso mediante un ejemplo.
    console.log("\n3.- Comprobar si es array");
    let comprobarArray = function (array) {
        if (Array.isArray(array))
            console.log("Es un array");
        else
            console.log("No es un array");
    }
    comprobarArray(array);
    comprobarArray(2);
//Crea  una función que cree un array de la dimensión indicada, cuyo contenido sean los números naturales comenzando desde 0
    console.log("\n4.-Array creado por funcion con dimension");
    let creaArray = function (dimension) {
        let arrayCreado = new Array(dimension);
        for (let i = 0; i < dimension; i++)
            arrayCreado[i] = i;
        return arrayCreado;
    }
    let array2 = creaArray(3);
    muestraForEach(array2);
//Crea  una función que devuelva un array con cada uno de los argumentos.
    console.log("\n5.-Array con argumentos");
    let creaArrayConArgumentos = function () {
        let arrayConArgumentos = [];
        for (let i = 0; i < arguments.length; i++)
            arrayConArgumentos.push(arguments[i]);
        return arrayConArgumentos;

    }
    let arrayConArgumentos = creaArrayConArgumentos("argumento1", "argumento2", "argumento3");
    muestraForEach(arrayConArgumentos);
//Crea  una función que devuelva un array con cada uno de los argumentos. En caso de que alguno de sus argumentos sea un array, que introduzca sus elementos uno a uno.
    console.log("\n6.-Array con argumentos 2");
    let creaArrayConArgumentos2 = function () {
        let arrayCreadoArgumentos = [];
        let arrayDeArgumentos = [];
        for (let i = 0; i < arguments.length; i++)
            arrayDeArgumentos.push(arguments[i]);
        for (let elem of arrayDeArgumentos)
            if (elem instanceof Array)
                for (let elem2 of elem)
                    arrayCreadoArgumentos.push(elem2);
            else
                arrayCreadoArgumentos.push(elem);
        return arrayCreadoArgumentos;
    }
    let arrayConArgumentos2 = creaArrayConArgumentos2("Hola", ["arr1", "arr2"], "adios");
    muestraForEach(arrayConArgumentos2);
//Crea una función que elimine todos los undefined de un array.
    console.log("\n7.- Elimina undefined")
    let eliminaUndefined = function (array) {
        for (elem of array)
            if (elem === undefined)
                array.splice(array.indexOf(elem), 1);
        return array;
    }
    let arrayConUndefined = ["Hola", undefined, "arg3", undefined];
    arrayConUndefined = eliminaUndefined(arrayConUndefined);
    muestraForEach(arrayConUndefined);
//Indica la diferencia entre los siguientes métodos, y demuestra su uso con algunos arrays:  Array.prototype.forEach(), Array.prototype.every(), Array.prototype.some() y Array.prototype.filter()
    console.log("\n8.- Diferencia métodos:")
    function mayorQue10(elemento) {
        console.log(elemento > 10);
    }

    console.log("Con forEach");
    [1, 20, 30, 10].forEach(mayorQue10);
    console.log("Con every");
    [1, 20, 30, 10].every(mayorQue10);
    console.log("Con some");
    console.log([1, 20, 30, 10].some(elem => elem > 10));
    console.log("Con filter");
    [1, 20, 30, 10].filter(mayorQue10);
//Averigua qué método es el más eficiente para manejarse con arrays.  Compruébalo mediante performance.now() o similares
    //Introduce 10 elementos en un array mediante push(), unshift(), directamente, fijando tamaño en new Array...
    //Eliminar 10 elementos en un array mediante pop(), shift(), directamente, fijando tamaño...
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