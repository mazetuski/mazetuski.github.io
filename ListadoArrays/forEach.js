/**
 * Created by Miguel Ángel Zamora Blanco on 07/11/2016.
 */
{
//Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.
    console.log("\n1.- con forEach");
    let array = ["cero", "uno", "dos", "tres", "cuatro"];
    let muestraForEachConArgumentos = function (array) {
        array.forEach(function (elem, index, array) {
            console.log(index + " : " + elem);
        });
    }

    muestraForEachConArgumentos(array);
}