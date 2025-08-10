// App.js
import { useState } from "react";
import { data } from "./data"
import Table from "./Table"
import { Addstudent } from "./Addstudent";
import './app.css'





function App() {

  const [mydata, setMyData] = useState(data)

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
  const onAddHandler = (data) => {
    setMyData([...mydata,{
      id:mydata.length +1,
      name:data.name,
    }])
  }
  return (
    <div className="centring">
      
      <Addstudent onAddHandler={onAddHandler} />
      <table className="box">

        <tbody>
        {mydata.map((item) => { return (
          <Table
            key={item.id}
            item={item}
            clickHandler={clickHandler}
            toggleChecked={toggleChecked}
          />
        )})}
        </tbody>

        
      </table>
    </div>
    
  );
}

export default App;
