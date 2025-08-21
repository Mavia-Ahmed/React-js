// Table.jsx
const Table = ({ item, clickHandler, toggleChecked, onEditHandler }) => {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={item.checked || false}
          onChange={() => toggleChecked(item.id)}
        />
      </td>
      <td style={{ textDecoration: item.checked ? "line-through" : "none" }}>
        <span className="etem">{item.name}</span>
      </td>
      <td className="actions">
        <button className="btn1" onClick={() => onEditHandler(item.id, item.name)}><span style={{color: "white", fontWeight: "bold"}}>Edit</span></button>
        <button className="btn" onClick={() => clickHandler(item.id)}><span style={{color: "white", fontWeight: "bold"}}>X</span></button>
      </td>
    </tr>
  );
};

export default Table;
