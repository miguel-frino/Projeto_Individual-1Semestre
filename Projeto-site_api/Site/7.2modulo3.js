listaSubMod1.style.display = "block";

function abrirFecharModulo() {
  if (listaSubMod1.style.display === "block") {
    listaSubMod1.style.display = "none";
  } else {
    listaSubMod1.style.display = "block";
  }
}

function mostrarRitmo() {
  div_mensagem.innerHTML = `
    <h2>Ritmo</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut mi et nunc feugiat elementum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nulla eu nisl bibendum.</p>
  `;
}

function mostrarMelodia() {
  div_mensagem.innerHTML = `
    <h2>Melodia</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus neque sed justo varius.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus purus vel augue condimentum.</p>
  `;
}

function mostrarHarmonia() {
  div_mensagem.innerHTML = `
    <h2>Harmonia</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet urna nec massa dignissim.</p>

    <a class="botao" href="index.html">Módulo 1 concluído</a>
    <a class="botao" href="7-Quiz-Modulo1.html">Quiz do módulo</a>
  `;
}

