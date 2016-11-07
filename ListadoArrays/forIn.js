/**
 * Created by Miguel Ángel Zamora Blanco on 07/11/2016.
 * Indica la utilidad del operador in con los arrays. Demuestra su uso mediante un ejemplo.
 */

{
    let array = ["cero", "uno", "dos", "tres", "cuatro"];
    console.log("\n2.- con For in");
    let muestraForIn = function (array) {
        for (index in array)
            console.log(array[index]);
    }
    muestraForIn(array);
}