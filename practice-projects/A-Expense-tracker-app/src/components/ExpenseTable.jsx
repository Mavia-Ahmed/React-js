import React, { useContext } from "react";
import expenseContext from "../context/ExpenseContext";

const ExpenseTable = () => {
  const { expenses, totalExpense, salary, balance, deleteExpense, setEditExpense } = useContext(expenseContext);


  return (
    <div className="expenseTable">
      <h2>Expenses</h2>
      <table className="table" cellPadding="10">
        <thead>
          <tr>
            <th>Date</th>
            <th>Item</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((e) => (
            <tr key={e.id}>
              <td>{e.date}</td>
              <td>{e.title}</td>
              <td className="box2">{e.amount} <div className="box"><button className="btn1" onClick={() => deleteExpense(e.id)}>❌</button> <button className="btn2" onClick={() => setEditExpense(e)}>Edit</button></div></td>
            </tr>
          ))}
          <tr>
            <td colSpan="2"><strong>Total Expense</strong></td>
            <td>{totalExpense}</td>
          </tr>
          <tr>
            <td colSpan="2"><strong>Remaining Balance (Salary - Expenses)</strong></td>
            <td>{balance}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;

