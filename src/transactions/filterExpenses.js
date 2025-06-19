const expenses = [];
let currentHighlight = null;

function loadData() {
    const transactionLimit = 5; 
    fetch('expenses.json') 
        .then(response => response.json())
        .then(data => {
            expenses.push(...data);  
            renderExpenses(expenses, transactionLimit);  
        })
        .catch(error => console.error('Error loading data:', error));
}

function renderExpenses(expenses, limit = null) {
    const tableBody = document.querySelector('#historicoTable tbody');
    tableBody.innerHTML = ''; 

    const shownExpenses = limit ? expenses.slice(0, limit) : expenses;

    shownExpenses.forEach(expense => {
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

// ===================== TEST CODE =====================
function runUnitTests() {
  console.log('--- Running Unit Tests ---');
  let passed = 0;
  
  // Test 1: formatCurrency (positive)
  const positiveTest = formatCurrency(1234.56);
  if (positiveTest === 'R$ 1234,56') {
    console.log('✅ Unit Test 1 Passed: Positive currency formatting');
    passed++;
  } else {
    console.error(`❌ Unit Test 1 Failed: Expected 'R$ 1234,56' got '${positiveTest}'`);
  }

  // Test 2: formatCurrency (negative)
  const negativeTest = formatCurrency(-789.01);
  if (negativeTest === '-R$ 789,01') {
    console.log('✅ Unit Test 2 Passed: Negative currency formatting');
    passed++;
  } else {
    console.error(`❌ Unit Test 2 Failed: Expected '-R$ 789,01' got '${negativeTest}'`);
  }
};