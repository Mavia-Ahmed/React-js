import React from "react";
import { ExpenseProvider } from "./context/ExpenseContext";
import SalaryInput from "./components/SalaryInput";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import './app.css'

function App() {
  return (
    <ExpenseProvider>
      <div className="container" style={{ padding: "20px" }}>
        <h1>Expense Tracker</h1>
        <SalaryInput />
        <ExpenseForm />
        <ExpenseTable />
      </div>
    </ExpenseProvider>
  );
}

export default App;
