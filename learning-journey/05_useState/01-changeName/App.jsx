import { useState } from "react";

function App(){
    const [name, setName] = useState("Ali");

    function changeName(){
        setName("Ahmed");
    }
    return(
        <div>
            <p>{name}</p>
            <button onClick={changeName}>Click Me</button>
        </div>
    );
}

export default App;
