import React from 'react';

const Table = ({ item, clickHandler, toggleChecked }) => {
  return (
    <tr>
      <td><input type="checkbox" checked={item.checked} onChange={() => toggleChecked(item.id)}/></td>
      <td style={{ textDecoration: item.checked ? "line-through" : "none", }}>{item.name}</td>
      <td>
        <button className="btn" onClick={() => clickHandler(item.id)}><span style={{color: "white", fontWeight: "bold"}}>X</span></button>
      </td>
    </tr>
    
  );
};

export default Table;
