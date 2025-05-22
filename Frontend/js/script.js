function logout() {
  alert("Você saiu da conta.");
  window.location.reload();
}

function mudarAba(aba) {
  document.querySelectorAll('.aba').forEach(section => {
    section.classList.remove('ativa');
  });
  const selecionada = document.getElementById('aba-' + aba);
  if (selecionada) {
    selecionada.classList.add('ativa');
  }
}

// Configurar eventos após o carregamento da página
window.onload = () => {
  const botoes = document.querySelectorAll('.sidebar li');
  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      const aba = botao.dataset.aba;
      mudarAba(aba);
    });
  });

  // Restaurar última aba visitada, se desejar
  const ultima = localStorage.getItem("abaAtual") || "inicio";
  mudarAba(ultima);
};
