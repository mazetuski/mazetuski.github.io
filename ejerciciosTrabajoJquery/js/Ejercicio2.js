/**
 * Created by Miguel Ángel Zamora Blanco on 02/02/2017.
 * Subraya los párrafos que contengan la palabra 'tengo' mediante each()
 */

$(document).ready(function(){
   $("p").each(function(){
       let p = $(this);
        if(p.html().toLowerCase().indexOf("tengo")>=0) {
            p.css("text-decoration", "underline");
        }
   })
});