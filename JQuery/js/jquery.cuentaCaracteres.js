/**
 * Created by Miguel Ángel Zamora Blanco on 16/01/2017.
 */

jQuery.fn.cuentaCaracteres = function(){
    this.each(function(){
        let elem = $(this);
        let contador = $("<div>Contador caracteres: "+elem.val().length+"</div>");
        elem.after(contador);
        elem.data("campoContador", contador);
        elem.keyup(function(){
           let elem = $(this);
            let campoContador = elem.data("campoContador");
           campoContador.text('Contador caracteres: '+ elem.val().length);
        });
    });

    return this;
};

