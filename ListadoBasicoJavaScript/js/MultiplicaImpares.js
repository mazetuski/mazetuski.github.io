/**
 * Created by Miguel Ángel Zamora Blanco on 14/10/2016.
 * Implementa MultiplicaImpares que multiplique los 20
 * primeros números impares y muestre el resultado en pantalla.
 */

{
    let multiplica20PrimeroImpares = function () {
        let sumaImpares = 0;
        let mensaje = "";
        for (let i = 1; i < 40; i += 2) {
            if (i === 39)
                mensaje += "" + i;
            else
                mensaje += i + " + ";
            sumaImpares += i;
        }
        mensaje += " = " + sumaImpares;
        return mensaje;
    }

    console.log(multiplica20PrimeroImpares());
}