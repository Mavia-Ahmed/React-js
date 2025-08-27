import { useState } from 'react';

function App(){
    const [para, setPara] = useState("")
    const [print, setPrint] = useState("")
    function handleClick(){
        setPrint(para);
        setPara("");
    }
    function handleText(){
        setPrint("");
    }
    function handleEdit(){
        setPara(print);
    }


    return(
        <div>
            <input 
            type="text" 
            value={para}
            onChange={(e)=>setPara(e.target.value)}
            />
            <button onClick={handleClick}>Click me</button><button onClick={handleText}>Delete</button><button onClick={handleEdit}>Edit</button>
            <p>{print}</p>
        </div>
    )
}
export default App;
