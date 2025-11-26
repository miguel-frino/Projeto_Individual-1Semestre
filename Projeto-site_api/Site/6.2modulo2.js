listaSubMod2.style.display = "block";

function abrirFecharModulo2() {
  if (listaSubMod2.style.display === "block") {
    listaSubMod2.style.display = "none";
  } else {
    listaSubMod2.style.display = "block";
  }
}

function mostrarNotas() {
  document.getElementById("conteudo_notas").style.display = "block";
  document.getElementById("conteudo_intervalos").style.display = "none";
  document.getElementById("conteudo_acidentes").style.display = "none";
}

function mostrarIntervalos() {
  document.getElementById("conteudo_notas").style.display = "none";
  document.getElementById("conteudo_intervalos").style.display = "block";
  document.getElementById("conteudo_acidentes").style.display = "none";
}

function mostrarAcidentes() {
  document.getElementById("conteudo_notas").style.display = "none";
  document.getElementById("conteudo_intervalos").style.display = "none";
  document.getElementById("conteudo_acidentes").style.display = "block";
}


