var i= 0;
document.getElementById("button").addEventListener("click", next);
function next() { 
  let dynamicHeight = document.getElementById("personaje-container").clientWidth /4.0;
  let personajes = document.getElementById("personajes");
  console.log(dynamicHeight);

  switch (i) {
    case 0:
      newPersonaje = `<div class='personaje' style='--h: ${dynamicHeight}px' ><h1 style=" color:white;font-family: 'Zooma';font-size: 25vh;margin: 3vh;font-weight: 100;">ROJA</h1></div>`;   
      nombre="- narrador -";
      dialogo = "consejo: se pueden usar la barra espaciadora y la flecha derecha en lugar de el boton 'siguiente'.";
      personajes.innerHTML=newPersonaje;
      i++;  
    break;
    case 1:
      newPersonaje = ` <div class='personaje' style='--h: ${dynamicHeight}px' ><img class="animate__animated animate__fadeIn"   src="../img/slide_1.png" style="height: 100%;width: auto;"></div>`;    
      nombre="- narrador -";
      dialogo = "* bunny camina por el bosque hablando en voz exageradamente alta y finguiendo que no nota que algo la esta siguiendo. *";
      document.getElementById("fondo").innerHTML='';
      personajes.innerHTML=newPersonaje;
      i++;
      
    break;
    case 2:
      newPersonaje = `<div class='personaje' style='--h: ${dynamicHeight}px' ><img class="animate__animated animate__fadeInRight"   src="../img/red_1.png" style="height: 100%;width: auto;"></div>`;   
      nombre="- bunny -";
      dialogo = "ohh!! espero que nada inesperado se cruze en mi camino por que tengo que llevarle esta canasta con comida a mi abuela.";
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
      dialogo = "* de repente una niebla empieza a rodearla y se oye una voz *";
      document.getElementById("fondo_superior").style.backgroundImage = "url(' ')";
      //personajes.insertAdjacentHTML("afterbegin", newPersonaje);
      personajes.innerHTML=newPersonaje;
      //document.getElementById("fondo").style.backgroundImage = null;
      document.getElementById("fondo").innerHTML='';
      i++;  
    break;
    case 4: 
    newPersonaje = `<div class='personaje' style='--h: ${dynamicHeight}px;' ><img class="animate__animated animate__fadeInRight"   src="../img/lobo_1.png" style="height: 100%;width: auto;"></div>`;    
      nombre="- lobo -";
      dialogo = "Pequeña conejita perdida en el bosque, ¿cual es la prisa?";
      document.getElementById("fondo").innerHTML= ' <div id="fondo_img" class="animate__animated animate__fadeIn" style=" background-image: url(../img/fondo_2.png);" ></div>';
      document.getElementById("fondo_superior").classList.add("animate__animated"); 
      document.getElementById("fondo_superior").classList.add("animate__fadeIn"); 
      document.getElementById("fondo_superior").style.backgroundImage = "url('../img/fondo_superior_2.png')";
      personajes.innerHTML=newPersonaje;
      
      i++;  
    break;
    case 5:
      newPersonaje = `<div class='personaje' style='--h: ${dynamicHeight}px; animation: none' ><img    src="../img/lobo_1.png" style="height: 100%;width: auto;"></div>`; 
      nombre="- lobo -";  
      dialogo = "tengo mucha hambre pequeña, ¿no vas a ofrecerme nada de lo que traes en  esa canasta? donde quedaron los modales de antaño? ";
      // personajes.insertAdjacentHTML("beforeend", newPersonaje);
      personajes.innerHTML=newPersonaje;

      i++;  
    break;
    case 6:
      newPersonaje = `<div class='personaje' style='--h: ${dynamicHeight}px' ><img    src="../img/red_2.png"  class="animate__animated animate__fadeInLeft"  style="height: 100%;width: auto;"></div>`; 
      
        nombre="- bunny -";
        dialogo = "oh! disculpe pero no creo traer nada de su gusto.";

        personajes.innerHTML=newPersonaje;
        
        // document.getElementsByClassName("personaje")[1].style.filter= "brightness(0.5);";
        
        i++;  
      break;
      case 7:

          newPersonaje = `<div class='personaje' style='--h: ${dynamicHeight}px' ><img    src="../img/lobo_1.png"  class="animate__animated animate__fadeInRight"  style="height: 100%;width: auto;"></div>`; 
          nombre="- lobo -";
          dialogo = "ooohhhh pero claro que traes algo de mi gusto, puedo oler hogazas de pan, puedo oler algunas manzanas y puedo oler...";
          personajes.innerHTML=newPersonaje;
          
          i++;
      break;
      case 8:
        newPersonaje = `<div class='personaje' style='--h: ${dynamicHeight}px; animation: none' ><img    src="../img/lobo_1.png" style="height: 100%;width: auto;"></div>`; 
        nombre="- lobo -";  
        dialogo = "un cadaver";
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
    }  
     document.getElementById("nombre_div").innerHTML= nombre;
  }