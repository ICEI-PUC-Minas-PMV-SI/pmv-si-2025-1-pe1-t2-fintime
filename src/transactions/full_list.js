document.addEventListener('DOMContentLoaded', () => {
    fetch('expenses.json')
        .then(response => response.json())
        .then(savedExpenses => {
            renderExpenses(savedExpenses);
            document.getElementById('searchButton').addEventListener('click', filterExpenses);
            document.getElementById('searchInput').addEventListener('keypress', (e) => {
                if (e.key === 'Enter') filterExpenses();
            });
            const exportButton = document.getElementById('exportButton');
            if (exportButton) {
                exportButton.addEventListener('click', exportToCSV);
            }
        })
        .catch(error => console.error('Error loading data:', error));
});

  
  function renderExpenses(expenses) {
    const tableBody = document.querySelector('#fullHistoryTable tbody');
    tableBody.innerHTML = '';
  
    expenses.forEach(expense => {
      const row = document.createElement('tr');
  
      const dateCell = document.createElement('td');
      dateCell.textContent = expense.date || '-';
      row.appendChild(dateCell);
  
      const descCell = document.createElement('td');
      descCell.textContent = expense.description || '-';
      row.appendChild(descCell);
  
      const categoryCell = document.createElement('td');
      categoryCell.textContent = expense.category || '-';
      row.appendChild(categoryCell);
  
      const valueCell = document.createElement('td');
      valueCell.textContent = formatCurrency(expense.value);
      valueCell.classList.add(expense.value < 0 ? 'negativo' : 'positivo');
      row.appendChild(valueCell);
  
      tableBody.appendChild(row);
    });
  }
  
  function formatCurrency(amount) {
    return amount >= 0
      ? `R$ ${amount.toFixed(2).replace('.', ',')}`
      : `-R$ ${Math.abs(amount).toFixed(2).replace('.', ',')}`;
  }
  
  function filterExpenses() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#fullHistoryTable tbody tr');
  
    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
   }  

   document.getElementById('exportButton')?.addEventListener('click', exportToCSV);

   function exportToCSV() {
       fetch('expenses.json')
           .then(response => response.json())
           .then(savedExpenses => {
               if (savedExpenses.length === 0) {
                   alert('Nenhuma transação encontrada para exportar');
                   return;
               }
   
               let csv = 'Data,Descrição,Categoria,Valor\n';
               
               savedExpenses.forEach(expense => {
                   csv += `"${expense.date || ''}","${expense.description || ''}","${expense.category || ''}",${formatCurrencyForExport(expense.value)}\n`;
               });
   
               const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
               const url = URL.createObjectURL(blob);
               const link = document.createElement('a');
               link.href = url;
               link.setAttribute('download', `transacoes_${new Date().toISOString().slice(0,10)}.csv`);
               document.body.appendChild(link);
               link.click();
               document.body.removeChild(link);
           })
           .catch(error => {
               console.error('Error exporting data:', error);
               alert('Erro ao carregar dados para exportação');
           });
   }

function formatCurrencyForExport(amount) {
  return amount >= 0
    ? amount.toFixed(2)
    : `-${Math.abs(amount).toFixed(2)}`;
}