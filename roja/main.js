let version = "v 2.0"

// mostrar version en .versiondiv
var x = document.getElementsByClassName("version_div");
var i;
for (i = 0; i < x.length; i++) {
  x[i].innerHTML = version;
}

// empezar visualnovel
function start() {
  document.getElementById("main_menu").style.display = "none";
  document.getElementById("container").style.display = "flex";
}


// actualizar el tamaño dinamico de los personajes al cambiar el tamaño de la pantalla
  window.addEventListener("resize", ResizeFunction);

  function ResizeFunction() {
    let dynamicHeight = document.getElementById("personaje-container").clientWidth /4.0;
    //alert("ventana cambiada");
    //$( ".personaje" ).css( "--h", dynamicHeight );
    $( ".personaje" ).css( "--h", dynamicHeight+"px" );
  }


  // 'siguiente' con la barra espaciadora y la flecha derecha
window.addEventListener("keydown", keydown_next);
  
  function  keydown_next(){

  var event = window.event ? window.event : e;
    console.log(event.keyCode);
    if( event.keyCode == 39 || event.keyCode == 32 ){
      // document.getElementById("button").addClass('active');
      document.getElementById("button").style.color = 'black';
      document.getElementById("button").style.backgroundColor = 'white';
     // $(button).addClass('active')
      next();
      setTimeout(myFunction, 100)
    }

    function myFunction() {
      document.getElementById("button").style.color = 'white';
      document.getElementById("button").style.backgroundColor = 'black';
     }
}

 
