/**
 * Created by Miguel Ángel Zamora Blanco on 07/11/2016.
 * Crea una función que elimine todos los undefined de un array.
 */

{
    console.log("\n7.- Elimina undefined")
    let eliminaUndefined = function (array) {
        for (elem of array)
            if (elem === undefined)
                array.splice(array.indexOf(elem), 1);
        return array;
    }
    let arrayConUndefined = ["Hola", undefined, "arg3", undefined];
    console.log(arrayConUndefined)
    arrayConUndefined = eliminaUndefined(arrayConUndefined);
    console.log(arrayConUndefined);
}