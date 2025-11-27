listaSubMod1.style.display = "block";

var ultimoModulo = localStorage.getItem("moduloAtivo");

function esconderTudo() {
  document.getElementById("conteudo_ritmo").style.display = "none";
  document.getElementById("conteudo_melodia").style.display = "none";
  document.getElementById("conteudo_harmonia").style.display = "none";
}

if (ultimoModulo) {
  esconderTudo();
  document.getElementById(ultimoModulo).style.display = "block";
} else {
  document.getElementById("conteudo_ritmo").style.display = "block";
}

function abrirFecharModulo1() {
  var menu = document.querySelector(".menu-lateral");

  menu.classList.toggle("aberto");

  if (listaSubMod1.style.display === "block") {
    listaSubMod1.style.display = "none";
  } else {
    listaSubMod1.style.display = "block";
  }
}


function mostrarRitmo() {
  esconderTudo();
  document.getElementById("conteudo_ritmo").style.display = "block";
  localStorage.setItem("moduloAtivo", "conteudo_ritmo");
}

function mostrarMelodia() {
  esconderTudo();
  document.getElementById("conteudo_melodia").style.display = "block";
  localStorage.setItem("moduloAtivo", "conteudo_melodia");
}

function mostrarHarmonia() {
  esconderTudo();
  document.getElementById("conteudo_harmonia").style.display = "block";
  localStorage.setItem("moduloAtivo", "conteudo_harmonia");
}
