import React, { useState, useContext } from "react";
import expenseContext from "../context/ExpenseContext";

const SalaryInput = () => {
  const [amount, setAmount] = useState("");
  const { addSalary } = useContext(expenseContext);

  const handleAddSalary = () => {
    if (amount) {
      addSalary(amount);
      setAmount("");
    }
  };

  return (
    <div className="salary">
      <h2>Enter Your Salary</h2>
      <input
        type="number"
        placeholder="Enter Salary"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAddSalary}>Add Salary</button>
    </div>
  );
};

export default SalaryInput;
