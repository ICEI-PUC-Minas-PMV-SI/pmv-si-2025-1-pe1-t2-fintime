function cadastrarCartao() {
  const bandeira = document.querySelector("select").value;
  const nome = document.getElementById("nomeCartao").value.trim();
  const fechamento = document.getElementById("fechamento").value;
  const vencimento = document.getElementById("vencimento").value;
  const limite = document.getElementById("limiteCredito").value;

  if (!nome || !fechamento || !vencimento || !limite) {
    alert("Preencha todos os campos.");
    return;
  }

  const novoCartao = {
    bandeira,
    nome,
    fechamento,
    vencimento,
    limite: parseFloat(limite).toFixed(2),
  };

  // Carregar os cartões existentes
  const cartoesExistentes = JSON.parse(localStorage.getItem("cards")) || [];

  // Adicionar o novo cartão
  cartoesExistentes.push(novoCartao);

  // Salvar no localStorage
  localStorage.setItem("cards", JSON.stringify(cartoesExistentes));

  alert("Cartão cadastrado com sucesso!");
  window.location.href = "../../src/cartoes/cartoes.html";
}

function voltar() {
  window.location.href = "../../src/cartoes/cartoes.html";
}
