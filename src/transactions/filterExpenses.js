const expenses = [];
let currentHighlight = null;

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

function searchExpenses() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    if (!searchTerm) return;

    const tableRows = document.querySelectorAll('#historicoTable tbody tr');
    let foundRow = null;

    if (currentHighlight) {
        currentHighlight.classList.remove('highlight');
        currentHighlight = null;
    }

    for (const row of tableRows) {
        const rowText = row.textContent.toLowerCase();
        if (rowText.includes(searchTerm)) {
            foundRow = row;
            break;
        }
    }

    if (foundRow) {
        foundRow.classList.add('highlight');
        currentHighlight = foundRow;

        foundRow.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        setTimeout(() => {
            foundRow.classList.remove('highlight');
            currentHighlight = null;
        }, 3000);
    } else {
        alert('No matching expenses found');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadData();
    document.getElementById('searchButton').addEventListener('click', searchExpenses);
    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchExpenses();
        }
    });
    setupViewAllButton();
});

function setupViewAllButton() {
    const viewAllBtn = document.querySelector('.ver-tudo button');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => {
            localStorage.setItem('allExpenses', JSON.stringify(expenses));
            window.location.href = 'full_list.html';
        });
    }
}
