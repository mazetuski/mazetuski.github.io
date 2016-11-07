/**
 * Created by Miguel Ángel Zamora Blanco on 07/11/2016.
 * Indica la función que comprueba si un objeto es o no un Array. Demuestra su uso mediante un ejemplo.
 */
{
    let array = ["cero", "uno", "dos", "tres", "cuatro"];
    console.log("\n3.- Comprobar si es array");
    let comprobarArray = function (array) {
        if (Array.isArray(array))
            console.log("Es un array");
        else
            console.log("No es un array");
    }
    comprobarArray(array);
    comprobarArray(2);
}