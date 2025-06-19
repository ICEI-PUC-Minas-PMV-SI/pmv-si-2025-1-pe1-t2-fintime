document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("transaction-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const description = document.getElementById("description").value.trim();
      const category = document.getElementById("category").value;
      const type = document.querySelector('input[name="type"]:checked').value;
      const date = document.getElementById("date").value;
      const value = parseFloat(document.getElementById("value").value);
  
      if (!description || !category || !date || isNaN(value)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
      }
      const newTransaction = {
        // id Poderíamos adicionar IDs no futuro
        description,
        category,
        type,
        date,
        value
      };
  
      let transactions = JSON.parse(localStorage.getItem("expenses")) || [];
  
      transactions.push(newTransaction);
      
      localStorage.setItem("expenses", JSON.stringify(transactions));
  
      alert("Transação salva com sucesso!");
  
      form.reset();
    });
  });