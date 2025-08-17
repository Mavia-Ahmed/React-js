// App.js
import { useState } from "react";
import { data } from "./data"
import Table from "./Table"
import { Addstudent } from "./Addstudent";
import './app.css'





function App() {

  const [mydata, setMyData] = useState(data)  // puranay waly mein bas yeh hi tha
  const [editId, setEditId] = useState(null);   // 🔹 track edit item
  const [editName, setEditName] = useState("");

  //this for deleting items
  const clickHandler = (id) => {
    let results = mydata.filter((item)=> item.id !=id)
    setMyData(results)
  }

  const toggleChecked = (id) => {
    const updated = mydata.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setMyData(updated);
  };



  //this is for sending new data means input ka data
  /*purana wala
    const onAddHandler = (data) => {
    setMyData([...mydata,{
      id:mydata.length +1,
      name:data.name,
    }])
  } */



  // yeh naya wala hai add or update
  const onAddHandler = (data) => {
    if (editId !== null) {
      // 🔹 update existing
      const updated = mydata.map((item) =>
        item.id === editId ? { ...item, name: data.name } : item
      );
      setMyData(updated);
      setEditId(null);
      setEditName("");
    } else {
      // 🔹 add new
      setMyData([...mydata, {
        id: mydata.length + 1,
        name: data.name,
      }]);
    }
  };

  // edit button handler
  const onEditHandler = (id, name) => {
    setEditId(id);
    setEditName(name);
  };
// yahan tak



  return (
    <div className="centring">
      
      <Addstudent
       onAddHandler={onAddHandler} 
       editName={editName}  //yeh naya wala hai
       />
      <table className="box">

        <tbody>
        {mydata.map((item) => (
          <Table
            key={item.id}
            item={item}
            clickHandler={clickHandler}
            toggleChecked={toggleChecked}
            onEditHandler={onEditHandler}
          />
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
