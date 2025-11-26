listaSubMod3.style.display = "block";

function abrirFecharModulo3() {
  if (listaSubMod3.style.display === "block") {
    listaSubMod3.style.display = "none";
  } else {
    listaSubMod3.style.display = "block";
  }
}

function mostrarOque() {
  document.getElementById("conteudo_oque").style.display = "block";
  document.getElementById("conteudo_maior").style.display = "none";
  document.getElementById("conteudo_como").style.display = "none";
  document.getElementById("conteudo_pratica").style.display = "none";
}

function mostrarMaior() {
  document.getElementById("conteudo_oque").style.display = "none";
  document.getElementById("conteudo_maior").style.display = "block";
  document.getElementById("conteudo_como").style.display = "none";
  document.getElementById("conteudo_pratica").style.display = "none";
}

function mostrarComoMontar() {
  document.getElementById("conteudo_oque").style.display = "none";
  document.getElementById("conteudo_maior").style.display = "none";
  document.getElementById("conteudo_como").style.display = "block";
  document.getElementById("conteudo_pratica").style.display = "none";
}

function mostrarPrática() {
  document.getElementById("conteudo_oque").style.display = "none";
  document.getElementById("conteudo_maior").style.display = "none";
  document.getElementById("conteudo_como").style.display = "none";
  document.getElementById("conteudo_pratica").style.display = "block";
}


