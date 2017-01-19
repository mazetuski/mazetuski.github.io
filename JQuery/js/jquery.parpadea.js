/**
 * Created by Miguel Ángel Zamora Blanco on 16/01/2017.
 */

jQuery.fn.parpadea = function(){
    this.each(function(){
        let elem = $(this);
        elem.fadeOut(250, function(){
            $(this).fadeIn(250);
        });
    });
    return this;
};
