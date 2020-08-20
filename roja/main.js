let version = "v 0.0.11"

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