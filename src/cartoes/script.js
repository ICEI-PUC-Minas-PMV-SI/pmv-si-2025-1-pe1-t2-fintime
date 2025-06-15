document.addEventListener("DOMContentLoaded", () => {
  initChart();
  renderCards();
});

function initChart() {
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
        legend: { position: "top" },
      },
    },
  });
}

function renderCards() {
  const cardList = document.getElementById("card-list");
  cardList.innerHTML = "";

  const cards = JSON.parse(localStorage.getItem("cards")) || [];

  cards.forEach((card, index) => {
    const cardEl = document.createElement("div");
    cardEl.classList.add("card-item");

    cardEl.innerHTML = `
      <img src="../../docs/img/${card.bandeira}.png" alt="${card.bandeira}" class="bandeira">
      <p>R$ ${parseFloat(card.limite).toFixed(2)}</p>
      <div>
        <button class="edit-card" onclick="editCard(${index})">✏️</button>
        <button class="remove-card" onclick="removeCard(${index})">🗑️</button>
      </div>
    `;
    cardList.appendChild(cardEl);
  });
}

function removeCard(index) {
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  cards.splice(index, 1);
  localStorage.setItem("cards", JSON.stringify(cards));
  renderCards();
}

function editCard(index) {
  localStorage.setItem("editCardIndex", index);
  window.location.href = "../editarcartoes/editar-cartao.html";
}