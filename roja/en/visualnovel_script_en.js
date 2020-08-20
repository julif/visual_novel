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
      newPersonaje = ` <div class='personaje' style='--h: ${dynamicHeight}px' ><img class="animate__animated animate__fadeIn"   src="../img/slide_1.png" style="height: 100%;width: auto;"></div>`;    
      nombre="- narrador -";
      dialogo = "* red walks through the woods talking in an exaggerated voice and pretending not to notice that something is following her. *";
      document.getElementById("fondo").innerHTML='';
      personajes.innerHTML=newPersonaje;
      i++;    
    break;
    case 2:
      newPersonaje = `<div class='personaje' style='--h: ${dynamicHeight}px' ><img class="animate__animated animate__fadeInRight"   src="../img/red_1.png" style="height: 100%;width: auto;"></div>`;   
      nombre="- red -";
      dialogo = "ohh !! I hope nothing unexpected comes my way because I have to take this food basket to my grandmother.";
      document.getElementById("fondo").innerHTML= ' <div id="fondo_img" class="animate__animated animate__fadeIn" style=" background-image: url(../img/fondo_1.png);" ></div>';
      document.getElementById("fondo_superior").classList.add("animate__animated"); 
      document.getElementById("fondo_superior").classList.add("animate__fadeIn"); 
      document.getElementById("fondo_superior").style.backgroundImage = "url('../img/fondo_superior_1.png')";
      personajes.innerHTML=newPersonaje;
      i++;  
    break;
    case 3:
      newPersonaje = `<div class='personaje' style='--h: ${dynamicHeight}px' ><img class="animate__animated animate__fadeIn"   src="../img/slide_2.png" style="height: 100%;width: auto;"></div>`;    
      // document.getElementById("personajes").innerHTML = "<img src=\"img/red2.png\"  style=\" height: 150px; width: auto;\" >"
      nombre="- narrador -";
      dialogo = "* suddenly a strange mist begins to surround her and she hears a voice *";
      document.getElementById("fondo_superior").style.backgroundImage = "url(' ')";
      //personajes.insertAdjacentHTML("afterbegin", newPersonaje);
      personajes.innerHTML=newPersonaje;
      //document.getElementById("fondo").style.backgroundImage = null;
      document.getElementById("fondo").innerHTML='';
      i++;  
    break;
    case 4: 
    newPersonaje = `<div class='personaje' style='--h: ${dynamicHeight}px;' ><img class="animate__animated animate__fadeInRight"   src="../img/lobo_1.png" style="height: 100%;width: auto;"></div>`;    
      nombre="- wolf -";
      dialogo = "Little bunny lost in the woods, what's the rush?";
      document.getElementById("fondo").innerHTML= ' <div id="fondo_img" class="animate__animated animate__fadeIn" style=" background-image: url(../img/fondo_2.png);" ></div>';
      document.getElementById("fondo_superior").classList.add("animate__animated"); 
      document.getElementById("fondo_superior").classList.add("animate__fadeIn"); 
      document.getElementById("fondo_superior").style.backgroundImage = "url('../img/fondo_superior_2.png')";
      personajes.innerHTML=newPersonaje;
      i++;  
    break;
    case 5:
      newPersonaje = `<div class='personaje' style='--h: ${dynamicHeight}px; animation: none' ><img    src="../img/lobo_1.png" style="height: 100%;width: auto;"></div>`; 
      nombre="- wolf -";  
      dialogo = "I'm very hungry little one, aren't you going to offer me anything that you bring in that basket? where are the manners of yesteryear?";
      // personajes.insertAdjacentHTML("beforeend", newPersonaje);
      personajes.innerHTML=newPersonaje;
      document.getElementById("button").style.display= 'none';
      i++;  
    break;
  }
  
  // personajes.innerHTML=newPersonaje;
  dialogo= "<p id=\"dialogo\" class=\"animate__animated animate__fadeInDown\" >"+ dialogo +"</p>";
  document.getElementById("texto").innerHTML= dialogo;
  
  switch (nombre) {
      case "- bunny -": 
      document.getElementById("nombre_div").style.color= '#b42636';
      document.getElementById("nombre_div").innerHTML= 'red';
      document.getElementById("dialogo").style.color= '#dad6e8!important';
     
      break;
      case "- red -": 
      document.getElementById("nombre_div").style.color= '#b42636';
      document.getElementById("dialogo").style.color= '#dad6e8!important';
     
      break;
      case "- narrador -":
      document.getElementById("nombre_div").style.color= '#413a56';
      document.getElementById("dialogo").style.color= '#4e4861';

      nombre=" ";
      break;
      
      case " ":
      document.getElementById("dialogo").style.color= '#413a56!important';

      break;
      case "- lobo -":
      document.getElementById("nombre_div").style.color= '#3c3354';
      document.getElementById("dialogo").style.color= ' #dad6e8!important';
      break;
      case "- wolf -":
        document.getElementById("nombre_div").style.color= '#3c3354';
        document.getElementById("dialogo").style.color= ' #dad6e8!important';
    }
    document.getElementById("nombre_div").innerHTML= nombre;
  }