listaSubMod1.style.display = "block";

function abrirFecharModulo1() {
  if (listaSubMod1.style.display === "block") {
    listaSubMod1.style.display = "none";
  } else {
    listaSubMod1.style.display = "block";
  }
}

function mostrarRitmo() {
  document.getElementById("conteudo_ritmo").style.display = "block";
  document.getElementById("conteudo_melodia").style.display = "none";
  document.getElementById("conteudo_harmonia").style.display = "none";
}

function mostrarMelodia() {
  document.getElementById("conteudo_ritmo").style.display = "none";
  document.getElementById("conteudo_melodia").style.display = "block";
  document.getElementById("conteudo_harmonia").style.display = "none";
}

function mostrarHarmonia() {
   document.getElementById("conteudo_ritmo").style.display = "none";
    document.getElementById("conteudo_melodia").style.display = "none";
    document.getElementById("conteudo_harmonia").style.display = "block";
  
}
