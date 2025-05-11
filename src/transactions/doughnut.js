document.addEventListener('DOMContentLoaded', function () {
    const categoryData = {
      labels: ['Academia', 'Transporte', 'Pet', 'Educação', 'Lazer', 'Alimentação'],
      percentages: [14, 8, 8, 30, 11, 29],
      colors: [
        '#4361ff',
        '#4cc9f0',
        '#f72585',
        '#7209b7',
        '#3a0ca3',
        '#4895ef'
      ]
    };
  
    const ctx = document.getElementById('categoryChart').getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: categoryData.labels,
        datasets: [{
          data: categoryData.percentages,
          backgroundColor: categoryData.colors,
          borderWidth: 0,
          cutout: '55%' 
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false 
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label || '';
                const value = context.raw || 0;
                return `${label}: ${value}%`;
              }
            }
          }
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    });
  });
  