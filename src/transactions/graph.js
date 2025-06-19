document.addEventListener('DOMContentLoaded', function() {

    const transactions = [
      { date: '2025-04-01', amount: 200 },
      { date: '2025-04-03', amount: 150 },
      { date: '2025-04-08', amount: 300 },
      { date: '2025-04-14', amount: 400 },
      { date: '2025-04-18', amount: 1340 },
      { date: '2025-04-25', amount: 500 },
      { date: '2025-04-28', amount: 450 },
    ];
    
    function generateWeeklyRanges(month, year) {
        const startDate = new Date(year, month, 1);
        const endDate = new Date(year, month + 1, 0);
        const weeks = [];
        
        const firstWeekEnd = new Date(startDate);
        if (firstWeekEnd.getDay() !== 0) { 
          firstWeekEnd.setDate(firstWeekEnd.getDate() + (6 - firstWeekEnd.getDay()));
        }
        
        weeks.push({
          start: new Date(startDate),
          end: new Date(firstWeekEnd)
        });
    
        let current = new Date(firstWeekEnd);
        current.setDate(current.getDate() + 1); 
        
        while (current <= endDate) {
          const weekStart = new Date(current);
          const weekEnd = new Date(current);
          weekEnd.setDate(weekEnd.getDate() + 6); 
          
          if (weekEnd > endDate) {
            weekEnd.setDate(endDate.getDate());
          }
          
          weeks.push({
            start: new Date(weekStart),
            end: new Date(weekEnd)
          });
          
          current.setDate(weekEnd.getDate() + 1); 
        }
    
        return weeks;
      }
    
    function formatDateLabel(date) {
      return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}`;
    }
    
    const month = 3; 
    const year = 2025;
    const weeks = generateWeeklyRanges(month, year);
    const labels = weeks.map(w => `${formatDateLabel(w.start)}–${formatDateLabel(w.end)}`);
    const data = weeks.map(({ start, end }) =>
      transactions.reduce((sum, tx) => {
        const d = new Date(tx.date);
        return d >= start && d <= end ? sum + tx.amount : sum;
      }, 0)
    );
    
    const ctx = document.getElementById('gastoChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
            label: 'Gasto por semana (R$)',
            data: data,
            backgroundColor: '#4361ff',
            borderRadius: 4,
            borderWidth: 0,
            barPercentage: 0.8,
            categoryPercentage: 0.9
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
              label: function(context) {
                return `R$ ${context.raw.toFixed(2)}`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: '#f0f0f0'
            },
            ticks: {
              callback: function(value) {
                return `R$ ${value}`;
              },
              color: '#666'
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#666'
            }
          }
        }
      }
    });
  });