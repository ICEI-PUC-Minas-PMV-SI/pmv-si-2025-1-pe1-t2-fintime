const mainChart = document.getElementById("chart-main")
const expensesChart = document.getElementById("chart-gastos")
const investmentsChart = document.getElementById("chart-investimentos") 

new Chart(mainChart ,{
  type: "pie",
  data: {
    labels: ["Gastos", "Investidos"],
    datasets: [{
      data: [55.6, 44.4],
      backgroundColor: ["#ff5c73", "#3b4fff"]
    }]
  },
  options: {
    plugins: {
      legend: {
        position: 'left'
      }
    }
  }
});

new Chart(expensesChart, {
  type: "doughnut",
  data: {
    labels: ["Transportes", "Pet", "Games"],
    datasets: [{
      data: [62.3, 25, 12.7],
      backgroundColor: ["#ff7373", "red", "pink"]
    }]
  },
  options: {
    cutout: "60%",
    plugins: {
      legend: {
        position: "bottom"
      }
    }
  }
});

new Chart(investmentsChart, {
  type: "doughnut",
  data: {
    labels: ["Poupança", "Academia", "Estudos"],
    datasets: [{
      data: [62.3, 25, 12.7],
      backgroundColor: ["#3b4fff", "turquoise", "#6cc1ff"]
    }]
  },
  options: {
    cutout: "60%",
    plugins: {
      legend: {
        position: "bottom"
      }
    }
  }
});