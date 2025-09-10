import { createContext, useState } from "react";

const expenseContext = createContext();

const ExpenseProvider = ({ children }) => {
  const [salary, setSalary] = useState(0);   // 💰 salary
  const [expenses, setExpenses] = useState([]); // 🧾 list of expenses
  const [editExpense, setEditExpense] = useState(null); //extra

  // salary set karne ka function
  const addSalary = (amount) => {
    setSalary(parseInt(amount));
  };

    const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now(), amount: parseInt(expense.amount) }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  const updateExpense = (updatedExpense) => {
    setExpenses(
      expenses.map((exp) => (exp.id === updatedExpense.id ? updatedExpense : exp))
    );
    setEditExpense(null); // reset after update
  };

  // total expense calculate
  const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);

  // balance calculate
  const balance = salary - totalExpense;

  return (
    <expenseContext.Provider value={{ salary, addSalary, expenses, addExpense, totalExpense, balance, deleteExpense, updateExpense, editExpense, setEditExpense }} >
      {children}
    </expenseContext.Provider>
  );
};

export default expenseContext;
export { ExpenseProvider };
