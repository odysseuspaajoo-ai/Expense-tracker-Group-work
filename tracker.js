let expenses = [];


function addExpense() {
    let name = document.getElementById("expenseName").value;
    let amount = document.getElementById("expenseAmount").value;
    
    if (isNaN(amount) || amount == "" || Number(amount) <= 0) {
        alert("Please enter a valid number for amount");
        return;
    }

    expenses.push(Number(amount));

    addRow(name, amount);

    calculateTotal();
 
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}


function addRow(name, amount) {
    let table = document.getElementById("expenseTable");

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>₵${amount}</td>
        <td><button onclick="deleteExpense(this)">Delete</button></td>
    `;

    table.appendChild(row);
}


function deleteExpense(button) {
    let row = button.parentNode.parentNode;
    let amountCell = row.children[1].innerText.replace("₵", "");

    let index = expenses.indexOf(Number(amountCell));
    if (index > -1) {
        expenses.splice(index, 1);
    }

    row.remove();

    calculateTotal();
}


function calculateTotal() {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i];
    }

    document.getElementById("total").innerText = "Total: ₵" + total;
}
