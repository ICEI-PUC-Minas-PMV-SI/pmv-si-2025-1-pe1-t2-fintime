document.addEventListener("DOMContentLoaded", () => {
  initChart();
  // initFaturaChart()
  renderCards();
});

function initChart() {
  const ctx = document.getElementById("limiteChart").getContext("2d");
  const cards = JSON.parse(localStorage.getItem("cards")) || [];

  const datasets = cards.map((card) => {
    const cor = gerarCorAleatoria();
    const valor = parseFloat(card.limite);

    return {
      label: card.nome || card.bandeira,
      data: Array(6).fill(valor), // mesmo valor para todos os meses
      borderColor: cor,
      backgroundColor: cor,
      tension: 0.4
    };
  });

  new Chart(ctx, {
    type: "line",
    data: {
      labels: [ '', ''],
      datasets: datasets
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `R$ ${parseFloat(context.raw).toFixed(2)}`;
            }
          }
        }
      }
    }
  });
}
// function initFaturaChart() {
//   const ctx = document.getElementById("faturaChart").getContext("2d");
//   const cards = JSON.parse(localStorage.getItem("cards")) || [];

//   const labels = cards.map((card) => card.nome || card.bandeira);
//   const valores = cards.map((card) => parseFloat(card.limite));

//   new Chart(ctx, {
//     type: "bar",
//     data: {
//       labels: labels,
//       datasets: [{
//         label: "Valor da Fatura",
//         data: valores,
//         backgroundColor: "#fcae61"
//       }]
//     },
//     options: {
//       responsive: true,
//       plugins: {
//         legend: { display: false },
//         tooltip: {
//           callbacks: {
//             label: function(context) {
//               return `R$ ${parseFloat(context.raw).toFixed(2)}`;
//             }
//           }
//         }
//       },
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });
// }

function adicionarFatura() {
  alert("Funcionalidade de adicionar fatura ainda será implementada.");
  // No futuro, redirecionar para ../addfatura/addfatura.html
}


function gerarDistribuicaoMensal(limite) {
  const meses = 6;
  const base = parseFloat(limite) / meses;
  const variacao = 0.3;

  return Array.from({ length: meses }, () => {
    const flutuar = (Math.random() * 2 - 1) * variacao;
    return Math.max(0, base + base * flutuar);
  });
}

function gerarCorAleatoria() {
  const letras = '0123456789ABCDEF';
  let cor = '#';
  for (let i = 0; i < 6; i++) {
    cor += letras[Math.floor(Math.random() * 16)];
  }
  return cor;
}

function renderCards() {
  const cardList = document.getElementById("card-list");
  const faturaInfo = document.querySelector(".fatura-info");
  cardList.innerHTML = "";

  const cards = JSON.parse(localStorage.getItem("cards")) || [];

  cards.forEach((card, index) => {
    // Cartão visual
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

  // Exibir a fatura do primeiro cartão (ou personalize para múltiplos depois)
  if (cards.length > 0 && faturaInfo) {
    const primeiroCartao = cards[0];
    const hoje = new Date();
    const vencimentoData = new Date(primeiroCartao.vencimento);

    const status = vencimentoData < hoje ? "Em Atraso" : "Em dia";

    faturaInfo.innerHTML = `
      <p><strong>Última paga:</strong> ${formatarData(primeiroCartao.fechamento)}</p>
      <p><strong>À pagar:</strong> ${formatarData(primeiroCartao.vencimento)}</p>
      <p><strong>Valor:</strong> R$ ${parseFloat(primeiroCartao.limite).toFixed(2)}</p>
      <p class="status">Status</p>
      <p class="${status === 'Em Atraso' ? 'atraso' : 'emdia'}">${status}</p>
    `;
  }
}

function formatarData(dataISO) {
  const data = new Date(dataISO);
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  return `${dia}/${mes}`;
}


function removeCard(index) {
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  cards.splice(index, 1);
  localStorage.setItem("cards", JSON.stringify(cards));
  renderCards();
}

function editCard(index) {
  localStorage.setItem("editCardIndex", index);
  window.location.href = "./editar-cartao.html";
}