var i= 0;
document.getElementById("button").addEventListener("click", next);
function next() { 
  let dynamicHeight = document.getElementById("personaje-container").clientWidth /4.0;
  let personajes = document.getElementById("personajes");

  console.log(dynamicHeight);
  
  switch (i) {
    case 0:
      newPersonaje = `<div class='personaje' style='--h: ${dynamicHeight}px' ><h1 style=" color:white;font-family: 'Zooma';font-size: 25vh;    margin: 3vh;font-weight: 100;">ROJA</h1></div>`;   
      nombre="- narrador -";
      dialogo = "tip: you can use the spacebar or the rigth key instead of the 'next' button.";
      personajes.innerHTML=newPersonaje;
      i++;  
    break;
    case 1:
      newPersonaje = ` <div class='personaje' style='--h: ${dynamicHeight}px' ><img class="animate__animated animate__fadeIn"   src="../img/slide1.png" style="height: 100%;width: auto;"></div>`;    
      nombre="- narrador -";
      dialogo = "* bunny walks through the woods talking in an exaggerated voice and pretending not to notice that something is following her. *";
      document.getElementById("fondo").innerHTML='';
      personajes.innerHTML=newPersonaje;
      i++;    
      document.getElementById("button").style.display= 'none';
    break;
  }
  
  // personajes.innerHTML=newPersonaje;
  dialogo= "<p id=\"dialogo\" class=\"animate__animated animate__fadeInDown\" >"+ dialogo +"</p>";
  document.getElementById("texto").innerHTML= dialogo;
  
  switch (nombre) {
      case "- bunny -": 
      document.getElementById("nombre_div").style.color= '#b42636';
      document.getElementById("dialogo").style.color= '#dad6e8!important';
     
      break;
      case "- narrador -":
      document.getElementById("nombre_div").style.color= '#413a56';
      document.getElementById("dialogo").style.color= '#4e4861';

      nombre=" ";
      break;
      break;
      case " ":
      document.getElementById("dialogo").style.color= '#413a56!important';

      break;
      case "- lobo -":
      document.getElementById("nombre_div").style.color= '#3c3354';
      document.getElementById("dialogo").style.color= ' #dad6e8!important';
    }
    document.getElementById("nombre_div").innerHTML= nombre;
  }