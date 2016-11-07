/**
 * Created by Miguel Angel Zamora Blanco on 07/11/2016.
 * Crea  una función que devuelva un array con cada uno de los argumentos.
 */

{
    console.log("\n5.-Array con argumentos");
    let creaArrayConArgumentos = function () {
        let arrayConArgumentos = [];
        for (let i = 0; i < arguments.length; i++)
            arrayConArgumentos.push(arguments[i]);
        return arrayConArgumentos;

    }
    let arrayConArgumentos = creaArrayConArgumentos("argumento1", "argumento2", "argumento3");
    console.log(arrayConArgumentos);
}