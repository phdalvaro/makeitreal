// Clase Expense que representa un gasto individual
class Expense {
    constructor(amount, description, date, category) {
        this.id = Date.now(); // ID único basado en el tiempo
        this.amount = amount;
        this.description = description;
        this.date = date || new Date().toISOString().split('T')[0]; // Fecha en formato YYYY-MM-DD
        this.category = category;
    }
}

// Clase Category para manejar las categorías
class Category {
    constructor(name) {
        this.name = name;
    }

    static defaultCategories() {
        return ['Food', 'Transport', 'Utilities', 'Entertainment', 'Others'];
    }
}

// Clase Tracker que gestiona la lógica general de la aplicación
class Tracker {
    constructor() {
        this.expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        this.categories = Category.defaultCategories();
        this.loadExpenses();
    }

    // Agregar un nuevo gasto
    addExpense(expense) {
        this.expenses.push(expense);
        this.saveExpenses();
        this.loadExpenses();
    }

    // Eliminar un gasto por ID
    deleteExpense(id) {
        this.expenses = this.expenses.filter(exp => exp.id !== id);
        this.saveExpenses();
        this.loadExpenses();
    }

    // Editar un gasto
    editExpense(id, updatedExpense) {
        this.expenses = this.expenses.map(exp => exp.id === id ? updatedExpense : exp);
        this.saveExpenses();
        this.loadExpenses();
    }

    // Guardar los gastos en localStorage
    saveExpenses() {
        localStorage.setItem('expenses', JSON.stringify(this.expenses));
    }

    // Cargar los gastos en la interfaz
    loadExpenses() {
        const expenseList = document.getElementById('expense-list');
        expenseList.innerHTML = ''; // Limpiar la lista antes de mostrar los gastos

        this.expenses.forEach(exp => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${exp.date} - ${exp.description} - $${exp.amount} [${exp.category}]
                <button onclick="tracker.deleteExpense(${exp.id})">Delete</button>
                <button onclick="tracker.editExpense(${exp.id})">Edit</button>`;
            expenseList.appendChild(listItem);
        });

        this.calculateTotal();
    }

    // Calcular el total de gastos
    calculateTotal() {
        const total = this.expenses.reduce((acc, exp) => acc + parseFloat(exp.amount), 0);
        document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
    }

    // Filtrar gastos por categoría
    filterByCategory(category) {
        const filteredExpenses = this.expenses.filter(exp => exp.category === category);
        this.displayFilteredExpenses(filteredExpenses);
    }

    // Mostrar los gastos filtrados
    displayFilteredExpenses(expenses) {
        const expenseList = document.getElementById('expense-list');
        expenseList.innerHTML = ''; // Limpiar la lista

        expenses.forEach(exp => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${exp.date} - ${exp.description} - $${exp.amount} [${exp.category}]`;
            expenseList.appendChild(listItem);
        });
    }
}

// Lógica para manejar el formulario y agregar gastos
document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe

    const amount = parseFloat(document.getElementById('amount').value);
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;

    if (amount && description && category) {
        const newExpense = new Expense(amount, description, date, category);
        tracker.addExpense(newExpense); // Agregar gasto al tracker
        
        this.reset(); // Limpiar formulario
    } else {
        alert('Please fill all the fields.');
    }
});

// Inicialización del tracker
const tracker = new Tracker();
