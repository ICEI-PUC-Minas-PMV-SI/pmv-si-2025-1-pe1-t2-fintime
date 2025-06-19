document.addEventListener("DOMContentLoaded", () => {
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  const index = localStorage.getItem("editCardIndex");

  if (index !== null) {
    const card = cards[index];
    document.getElementById("nome").value = card.nome;
    document.getElementById("limite").value = card.limite;
    document.getElementById("bandeira").value = card.bandeira;
    document.getElementById("fechamento").value = card.fechamento;
    document.getElementById("vencimento").value = card.vencimento;
  }
});

function salvarEdicao() {
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  const index = localStorage.getItem("editCardIndex");

  if (index !== null) {
    cards[index] = {
      nome: document.getElementById("nome").value,
      limite: document.getElementById("limite").value,
      bandeira: document.getElementById("bandeira").value,
      fechamento: document.getElementById("fechamento").value,
      vencimento: document.getElementById("vencimento").value,
    };

    localStorage.setItem("cards", JSON.stringify(cards));
    localStorage.removeItem("editCardIndex");
    window.location.href = "../cartoes/cartoes.html";
  }
}
