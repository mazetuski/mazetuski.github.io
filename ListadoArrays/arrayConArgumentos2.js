/**
 * Created by Miguel Ángel Zamora Blanco on 07/11/2016.
 * Crea  una función que devuelva un array con cada uno de los argumentos. En caso de que alguno de sus argumentos sea un array, que introduzca sus elementos uno a uno.
 */

{
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
    console.log(arrayConArgumentos2);
}