// Simulación de datos de ventas y gastos
const salesData = [1000, 1500, 2000, 2500];
const expensesData = [200, 300, 400, 500];

// Función para calcular la suma de un array
function sumArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

// Función para mostrar el balance
function showBalance() {
    const totalSales = sumArray(salesData);
    const totalExpenses = sumArray(expensesData);
    const netProfit = totalSales - totalExpenses;

    document.getElementById('total-sales').textContent = `Ventas totales: ₡${totalSales}`;
    document.getElementById('expenses').textContent = `Gastos: ₡${totalExpenses}`;
    document.getElementById('net-profit').textContent = `Beneficio neto: ₡${netProfit}`;
}

// Función para mostrar las transacciones
function showTransactions() {
    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = '';

    for (let i = 0; i < salesData.length; i++) {
        const listItem = document.createElement('li');
        listItem.classList.add('transaction-item');
        listItem.textContent = `Venta: ₡${salesData[i]} - Gasto: ₡${expensesData[i]}`;
        transactionList.appendChild(listItem);
    }
}

// Mostrar balance y transacciones al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    showBalance();
    showTransactions();
});
