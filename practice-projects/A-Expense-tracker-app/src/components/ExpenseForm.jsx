import React, { useState, useContext, useEffect } from "react";
import expenseContext from "../context/ExpenseContext";

const ExpenseForm = () => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const { addExpense, updateExpense, editExpense } = useContext(expenseContext);

  // 👇 jab editExpense change ho toh input fields fill ho jayein
  useEffect(() => {
    if (editExpense) {
      setDate(editExpense.date);
      setTitle(editExpense.title);
      setAmount(editExpense.amount);
    }
  }, [editExpense]);

  const handleAddExpense = () => {
    if (!date || !title || !amount) {
      alert("Please fill all fields before submitting!");
      return;
    }
    
    if (editExpense) {
      updateExpense({ id: editExpense.id, date, title, amount: parseInt(amount) });
    } else {
      addExpense({ date, title, amount: parseInt(amount) });
    }
    setDate("");
    setTitle("");
    setAmount("");
  };

  return (
    <div className="expenseForm">
      <h2>Add Expense</h2>
      <div className="formParent">
        <div className="formchild1">
          <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} required />
          <input type="text" placeholder="Item Name" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="formchild2">
          <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
          <button onClick={handleAddExpense}>
            {editExpense ? "Update" : "Add Expense"}
          </button>
        </div>
      </div>
      
      
    </div>
  );
};

export default ExpenseForm;
