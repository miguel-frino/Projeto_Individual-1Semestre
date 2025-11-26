listaSubMod2.style.display = "block";

var ultimoModulo2 = localStorage.getItem("modulo2Ativo");

function esconderTudoMod2() {
  document.getElementById("conteudo_notas").style.display = "none";
  document.getElementById("conteudo_intervalos").style.display = "none";
  document.getElementById("conteudo_acidentes").style.display = "none";
}

if (ultimoModulo2) {
  esconderTudoMod2();
  document.getElementById(ultimoModulo2).style.display = "block";
} else {
  document.getElementById("conteudo_notas").style.display = "block";
}

function abrirFecharModulo2() {
  if (listaSubMod2.style.display === "block") {
    listaSubMod2.style.display = "none";
  } else {
    listaSubMod2.style.display = "block";
  }
}

function mostrarNotas() {
  esconderTudoMod2();
  document.getElementById("conteudo_notas").style.display = "block";
  localStorage.setItem("modulo2Ativo", "conteudo_notas");
}

function mostrarIntervalos() {
  esconderTudoMod2();
  document.getElementById("conteudo_intervalos").style.display = "block";
  localStorage.setItem("modulo2Ativo", "conteudo_intervalos");
}

function mostrarAcidentes() {
  esconderTudoMod2();
  document.getElementById("conteudo_acidentes").style.display = "block";
  localStorage.setItem("modulo2Ativo", "conteudo_acidentes");
}



