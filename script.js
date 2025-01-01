// Scenario 1: Monthly Budget
function calculateBudget() {
    const income = parseFloat(document.getElementById('budget-income').value);
    const expenses = parseFloat(document.getElementById('budget-expenses').value);

    if (isNaN(income) || isNaN(expenses)) {
        alert('Please enter valid numbers.');
        return;
    }

    const balance = income - expenses;
    document.getElementById('budget-result').textContent = `Remaining Balance: ₹${balance.toFixed(2)}`;

    const ctx = document.getElementById('budgetChart').getContext('2d');
    const budgetChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Income', 'Expenses', 'Remaining Balance'],
            datasets: [{
                data: [income, expenses, balance],
                backgroundColor: ['#3498db', '#e74c3c', '#2ecc71'],
                borderColor: ['#2980b9', '#c0392b', '#27ae60'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Scenario 2: Credit Card Debt
function calculateDebt() {
    const debtAmount = parseFloat(document.getElementById('debt-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
    const monthlyPayment = parseFloat(document.getElementById('monthly-payment').value);

    if (isNaN(debtAmount) || isNaN(interestRate) || isNaN(monthlyPayment)) {
        alert('Please enter valid numbers.');
        return;
    }

    const months = Math.log(monthlyPayment / (monthlyPayment - debtAmount * interestRate)) / Math.log(1 + interestRate);
    const totalPaid = months * monthlyPayment;
    document.getElementById('debt-result').textContent = `Total Paid: ₹${totalPaid.toFixed(2)} after ${Math.ceil(months)} months`;

    const ctx = document.getElementById('debtChart').getContext('2d');
    const debtChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Debt Amount', 'Total Paid'],
            datasets: [{
                data: [debtAmount, totalPaid],
                backgroundColor: ['#e74c3c', '#2ecc71'],
                borderColor: ['#c0392b', '#27ae60'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Scenario 3: Investment Growth
function calculateInvestment() {
    const initialInvestment = parseFloat(document.getElementById('initial-investment').value);
    const annualRate = parseFloat(document.getElementById('investment-rate').value) / 100;
    const years = parseInt(document.getElementById('investment-years').value);

    if (isNaN(initialInvestment) || isNaN(annualRate) || isNaN(years)) {
        alert('Please enter valid numbers.');
        return;
    }

    const values = [];
    for (let i = 0; i <= years; i++) {
        const value = initialInvestment * Math.pow(1 + annualRate, i);
        values.push(value);
    }

    document.getElementById('investment-result').textContent = `Future Value: ₹${values[years].toFixed(2)}`;

    const ctx = document.getElementById('investmentChart').getContext('2d');
    const investmentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: years + 1 }, (_, i) => `${i} years`),
            datasets: [{
                label: 'Investment Growth',
                data: values,
                borderColor: '#2980b9',
                backgroundColor: 'rgba(41, 128, 185, 0.3)',
                fill: true,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Scenario 4: Loan Repayment
function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('loan-interest').value) / 100;
    const termYears = parseInt(document.getElementById('loan-term').value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(termYears)) {
        alert('Please enter valid numbers.');
        return;
    }

    const monthlyRate = interestRate / 12;
    const numberOfPayments = termYears * 12;
    const monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

    document.getElementById('loan-result').textContent = `Monthly Payment: ₹${monthlyPayment.toFixed(2)}`;

    const ctx = document.getElementById('loanChart').getContext('2d');
    const loanChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Loan Amount', 'Total Paid'],
            datasets: [{
                data: [loanAmount, monthlyPayment * numberOfPayments],
                backgroundColor: ['#e74c3c', '#2ecc71'],
                borderColor: ['#c0392b', '#27ae60'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Scenario 5: Tax Calculation
function calculateTaxes() {
    const salary = parseFloat(document.getElementById('salary').value);

    if (isNaN(salary)) {
        alert('Please enter a valid salary.');
        return;
    }

    const tax = salary * 0.15; // Assuming a flat 15% tax rate
    document.getElementById('tax-result').textContent = `Tax Payable: ₹${tax.toFixed(2)}`;

    const ctx = document.getElementById('taxChart').getContext('2d');
    const taxChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Salary', 'Tax'],
            datasets: [{
                data: [salary - tax, tax],
                backgroundColor: ['#3498db', '#e74c3c'],
                borderColor: ['#2980b9', '#c0392b'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Scenario 6: Emergency Fund
function calculateFund() {
    const expenses = parseFloat(document.getElementById('expenses-monthly').value);

    if (isNaN(expenses)) {
        alert('Please enter valid expenses.');
        return;
    }

    const fundRequired = expenses * 6; // Fund for 6 months
    document.getElementById('fund-result').textContent = `Emergency Fund: ₹${fundRequired.toFixed(2)}`;
}

// Scenario 7: Savings Goal
function calculateSavings() {
    const goal = parseFloat(document.getElementById('goal-amount').value);
    const time = parseInt(document.getElementById('saving-time').value);

    if (isNaN(goal) || isNaN(time)) {
        alert('Please enter valid numbers.');
        return;
    }

    const monthlySaving = goal / time;
    document.getElementById('goal-result').textContent = `Monthly Saving Required: ₹${monthlySaving.toFixed(2)}`;
}
