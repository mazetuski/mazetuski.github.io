/**
 * Created by Miguel Ángel Zamora Blanco on 14/10/2016.
 * . Implementa PorLineas que visualice los números del 0 al 100 separados por comas.
 * Cada múltiplo de 7 ha de comenzar en una línea nueva.
 */

{
    /**
     * Función que muestra los números del 0 al 100 separados por comas
     * y con un salto de líneas cada vez que sale un múltiplo de 7.
     * @returns {string} Devuelve una cadena con los números.
     */
    let porLineas = function () {
        let mensaje="";
        for(let i=0; i<101;i++) {
            if(i===0)
                mensaje+=""+i;
            else if (i % 7 === 0)
                mensaje += "\n"+i;
            else
                mensaje += ", " + i;
        }
        return mensaje;
    }

    console.log(porLineas());
}