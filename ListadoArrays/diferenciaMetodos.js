/**
 * Created by Miguel Ángel Zamora Blanco on 07/11/2016.
 * Indica la diferencia entre los siguientes métodos, y demuestra su uso con algunos arrays:  Array.prototype.forEach(), Array.prototype.every(), Array.prototype.some() y Array.prototype.filter()
 */

{
    console.log("\n8.- Diferencia métodos:")
    function mayorQue10(elemento) {
        console.log(elemento > 10);
    }

    console.log("array con el que pruebo: [1,20,30,10]\nCon forEach");
    [1, 20, 30, 10].forEach(mayorQue10);
    console.log("Con every");
    [1, 20, 30, 10].every(mayorQue10);
    console.log("Con some");
    console.log([1, 20, 30, 10].some(elem => elem > 10));
    console.log("Con filter");
    [1, 20, 30, 10].filter(mayorQue10);
}