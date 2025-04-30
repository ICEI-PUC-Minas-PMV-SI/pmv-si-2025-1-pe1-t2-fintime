const expenses = [];

function loadData() {
    fetch('expenses.json') 
        .then(response => response.json())
        .then(data => {
            expenses.push(...data);  
            renderExpenses(expenses);  
        })
        .catch(error => console.error('Error loading data:', error));
}

function renderExpenses(expenses) {
    const tableBody = document.querySelector('#historicoTable tbody');
    tableBody.innerHTML = ''; 

    expenses.forEach(expense => {
        const row = document.createElement('tr');

        const dataCell = document.createElement('td');
        dataCell.textContent = expense.date || '-';  
        row.appendChild(dataCell);

        const descCell = document.createElement('td');
        descCell.textContent = expense.description || '-';
        row.appendChild(descCell);
        
        const categoryCell = document.createElement('td');
        categoryCell.textContent = expense.category || '-';
        row.appendChild(categoryCell);
        
        const valueCell = document.createElement('td');
        valueCell.classList.add(expense.value < 0 ? 'negativo' : 'positivo');
        valueCell.textContent = formatCurrency(expense.value);
        row.appendChild(valueCell);
        
        tableBody.appendChild(row);
    });
}

function formatCurrency(amount) {
    return amount >= 0
        ? `R$ ${amount.toFixed(2).replace('.', ',')}`
        : `-R$ ${Math.abs(amount).toFixed(2).replace('.', ',')}`;
}

document.addEventListener('DOMContentLoaded', loadData);
