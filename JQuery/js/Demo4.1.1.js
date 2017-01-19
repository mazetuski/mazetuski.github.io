/**
 * Created by Miguel Ángel Zamora Blanco on 13/01/2017.
 */

$(function(){
   $("a").each(function(i){
      $("body").append("<p>"+$(this).prop("title")+"</p>");
   });
    $("a").prop({
        "title" : "nuevo titulo",
        "href" : "http://mazetuski.github.io",
        "style" : "color : #f80"
    });
});