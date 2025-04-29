const ctx = document.getElementById("gastosChart").getContext("2d");
new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [
      {
        label: "Visa",
        data: [0, 500, 1200, 2500, 2000, 0],
        borderColor: "#fcae61",
        backgroundColor: "#fcae61",
        tension: 0.4,
      },
      {
        label: "Mastercard",
        data: [0, 0, 1000, 3000, 10000, 5000],
        borderColor: "red",
        backgroundColor: "red",
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  },
});

// Função para adicionar novo cartão
document.querySelector(".add-card").addEventListener("click", function () {
  const cardList = document.querySelector(".card-list");

  // Cria um novo cartão
  const newCard = document.createElement("div");
  newCard.classList.add("card-item");
  newCard.innerHTML = `
      <img src="../img/visa.png" alt="novo-cartao" class="bandeira">
      <input type="number" placeholder="R$ 0,00" />
      <button class="remove-card">🗑️</button>
    `;

  cardList.insertBefore(newCard, this); // Adiciona antes do botão "Adicionar"

  // Dá função ao novo botão de remover
  newCard.querySelector(".remove-card").addEventListener("click", function () {
    newCard.remove();
  });
});

document.querySelectorAll(".remove-card").forEach((button) => {
  button.addEventListener("click", function () {
    this.parentElement.remove();
  });
});

// document.querySelectorAll(".add-card").forEach((button) => {
//   button.addEventListener("click", function () {
//     this.parentElement.includes("card");
//   });
// });
