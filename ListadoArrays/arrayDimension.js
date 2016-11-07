/**
 * Created by Miguel Ángel Zamora Blanco on 07/11/2016.
 * Crea  una función que cree un array de la dimensión indicada, cuyo contenido sean los números naturales comenzando desde 0
 */

{
    console.log("\n4.-Array creado por funcion con dimension");
    let creaArray = function (dimension) {
        let arrayCreado = new Array(dimension);
        for (let i = 0; i < dimension; i++)
            arrayCreado[i] = i;
        return arrayCreado;
    }
    let array2 = creaArray(3);
    console.log(array2);
}