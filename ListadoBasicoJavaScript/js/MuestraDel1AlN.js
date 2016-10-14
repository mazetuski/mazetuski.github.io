/**
 * Created by Miguel Ángel Zamora Blanco on 14/10/2016.
 * Implementa MuestraDelUnoAlN que pida un número entero y que muestre la
 * secuencia del 1 al número indicado. En caso de no poder generarse la secuencia
 * (menor que 1), que lo indique
 */

{
    /**
     * Comprueba que sea un numero Entero
     * @returns numero Devuelve el número.
     */
    let comprobarNumero = function () {
        do {
            var numero = prompt("Introduce un número mayor que 0");
        } while ((numero != parseInt(numero)));
        return parseInt(numero);
    }

    /**
     * Función que devuelve una secuencia desde 1 hasta un número.
     * @param numero Número que establece el final de la secuencia.
     * @returns {string} Devuelve una cadena con la secuencia.
     */
    let muestraDel1AlN = function (numero) {
        let mensaje = "";
        if (numero >= 1)
            for (let i = 1; i <= numero; i++)
                mensaje += "\t " + i
        else
            mensaje += "El numero " + numero + " es menor que 1";
        return mensaje;
    }

    console.log(muestraDel1AlN(comprobarNumero()));
}