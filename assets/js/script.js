function logout() {
  alert("Você saiu da conta.");
  window.location.reload();
}

function mudarAba(aba) {
  // Esconde todas as abas
  const abas = document.querySelectorAll('.aba');
  abas.forEach(section => section.classList.remove('ativa'));

  // Mostra a aba selecionada
  const selecionada = document.getElementById('aba-' + aba);
  if (selecionada) {
    selecionada.classList.add('ativa');
  }
}
