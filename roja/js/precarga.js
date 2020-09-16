var imagenes_a_cargar = [
  "julif.svg",
  "portrait_roja.png",
  "fondo_mainmenu.png",
  "slide_1.png",
  "slide_2.png",
  "red_1.png",
  "red_2.png",
  "lobo_1.png",
  "lobo_2.png",
  "lobo_3.png",
  "fondo_1.png",
  "fondo_2.png",
  "fondo_superior_1.png",
  "fondo_superior_2.png"

];
precarga( imagenes_a_cargar );

porcentaje =  "0%" ;
document.getElementById("porcentaje").innerHTML = porcentaje;
document.getElementById("barra").style.width = porcentaje;

var imagenes_cargadas = 0;
var numero_total;

function precarga( item ){ 
 // ------------- limpiar los datos para re-utilizacion -----------------
 porcentaje = "0%";
 document.getElementById("preloader").innerHTML = " ";
 imagenes_cargadas = 0;
 numero_total =  item.length;


 item.forEach(mostrar_imagenes_en_preloader);
 
 function mostrar_imagenes_en_preloader(item, index){
   document.getElementById("preloader").innerHTML +=    '<img  id="preloaded_element_'+ index +'" src="../img/'+ item +'" >' ;
  }

  var imagenes_en_preloader = $('#preloader').children('img').map(function(){
 return $(this).attr('id');
}).get()
imagenes_en_preloader.forEach(precargar_imagenes);



function precargar_imagenes(item, index){
 item ="#"+ item;
 $(item).on('load', function() {
   imagenes_cargadas++;
   console.log(   "cargada imagen: "+ imagenes_cargadas +" de "+ numero_total );
   // ------------- calcular y mostrar el porcentaje -----------------
   porcentaje = imagenes_cargadas* 100/  numero_total;   // saco el porcentaje de las imagenes cargadas
   porcentaje = porcentaje.toFixed() //convertir en numero entero
   porcentaje =  porcentaje + "%" ;
   document.getElementById("porcentaje").innerHTML = porcentaje;
   document.getElementById("barra").style.width = porcentaje;
   // ------------- terminado -----------------
   if( imagenes_cargadas == numero_total){
   console.log(" ");
   console.log("//carga completada//"); 
   console.log(" ");
   // document.getElementById("terminado").innerHTML = "//carga completada//";
   //document.getElementById("terminado").innerHTML = '<button onclick="go_to_landing()">Click me</button>';
   document.getElementById("terminado").style.display = "flex";
   document.getElementById("loading_screen").style.display = "none";
 }
})// load function
}//precargar_imagenes




}
