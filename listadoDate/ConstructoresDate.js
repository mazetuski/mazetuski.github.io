/**
 * Created by Miguel Ángeñ Zamora Blanco on 10/11/2016.
 */

{
    let init = function() {

        //Constructor Vacío
        let date = new Date();
        console.log("Constructor vacío: \n" + date);

        //Constructor ms
        date = new Date(1000000);
        console.log("Constructor ms: \n" + date);

        //Constructor cadena
        date = new Date("Nov 10, 2016");
        console.log("Constructor cadena: \n" + date);

        //Constructor con todos los parámetros

        date = new Date(2016, 10, 10, 17, 14, 30, 40);
        console.log("Constructor (añoNum, mesNum, diaNum, horaNum...): \n" + date);
    }

    window.onload = init;
}