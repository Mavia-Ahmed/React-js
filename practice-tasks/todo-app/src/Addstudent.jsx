// Addstudent.jsx
import { useState, useEffect } from "react";

export const Addstudent = ({ onAddHandler, editName }) => {
  const [name, setName] = useState("");

  // 🔹 jab editName update ho, input box me value aa jaye
  useEffect(() => {
    if (editName) {
      setName(editName);
    }
  }, [editName]);

  const handleSubmit = () => {
    if (name.trim() === "") return;
    onAddHandler({ name });
    setName(""); // clear input after add/update
  };

  return (
    <div className="form-row">
      <input
        className="put"
        type="text"
        value={name}
        placeholder="Enter todo..."
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn2" onClick={handleSubmit}>
        {editName ? "Update" : "Add"}
      </button>
    </div>
  );
};
