listaSubMod3.style.display = "block";

var ultimoModulo3 = localStorage.getItem("modulo3Ativo");

function esconderTudoMod3() {
  document.getElementById("conteudo_oque").style.display = "none";
  document.getElementById("conteudo_maior").style.display = "none";
  document.getElementById("conteudo_como").style.display = "none";
  document.getElementById("conteudo_pratica").style.display = "none";
}

if (ultimoModulo3) {
  esconderTudoMod3();
  document.getElementById(ultimoModulo3).style.display = "block";
} else {
  document.getElementById("conteudo_oque").style.display = "block";
}

function abrirFecharModulo3() {
  if (listaSubMod3.style.display === "block") {
    listaSubMod3.style.display = "none";
  } else {
    listaSubMod3.style.display = "block";
  }
}

function mostrarOque() {
  esconderTudoMod3();
  document.getElementById("conteudo_oque").style.display = "block";
  localStorage.setItem("modulo3Ativo", "conteudo_oque");
}

function mostrarMaior() {
  esconderTudoMod3();
  document.getElementById("conteudo_maior").style.display = "block";
  localStorage.setItem("modulo3Ativo", "conteudo_maior");
}

function mostrarComoMontar() {
  esconderTudoMod3();
  document.getElementById("conteudo_como").style.display = "block";
  localStorage.setItem("modulo3Ativo", "conteudo_como");
}

function mostrarPrática() {
  esconderTudoMod3();
  document.getElementById("conteudo_pratica").style.display = "block";
  localStorage.setItem("modulo3Ativo", "conteudo_pratica");
}



