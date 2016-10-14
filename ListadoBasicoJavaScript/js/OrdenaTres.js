/**
 * Created by Miguel Ángel Zamora Blanco on 14/10/2016.
 * Implementa OrdenaTres que pida tres números y los muestre ordenados de menor a
 * mayor
 */

{
    /**
     * Comprueba que sea un numero entero.
     * @returns numeroEntero Devuelve el número.
     */
    let comprobarNumeroEntero = function () {
        do {
            var numeroEntero = prompt("Introduce un número entero");
        } while (numeroEntero != parseInt(numeroEntero).toFixed());
        return parseInt(numeroEntero);
    }

    /**
     * Función que ordena tres números introducidos por el usuario.
     */
    let ordenaTres = function () {
        let numero1 = comprobarNumeroEntero();
        let numero2 = comprobarNumeroEntero();
        let numero3 = comprobarNumeroEntero();
        if (numero1 < numero2 && numero1 < numero3)
            if (numero2 < numero3)
                console.log(numero1 + ", " + numero2 + ", " + numero3);
            else
                console.log(numero1 + ", " + numero3 + ", " + numero2);
        else if (numero2 < numero1 && numero2 < numero3)
            if (numero1 < numero3)
                console.log(numero2 + ", " + numero1 + ", " + numero3);
            else
                console.log(numero2 + ", " + numero3 + ", " + numero1);
        else if (numero1 === numero2 && numero1 < numero3)
            console.log(numero1 + ", " + numero2 + ", " + numero3);
        else {
            if (numero1 < numero2)
                console.log(numero3 + ", " + numero1 + ", " + numero2);
            else
                console.log(numero3 + ", " + numero2 + ", " + numero1);
        }
    }

    ordenaTres();
}