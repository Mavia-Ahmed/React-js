import { useState } from 'react';
import './app.css'
function App(){
    const [count, setCount] = useState(0)
    function handleClick(){
        setCount(count + 1)
    }
    function changeNumber(){
        if(count > 0){
            setCount(count - 1)
        }
    }
    return(
        <div className="container">
            <button onClick={changeNumber}>&lt;</button>
            Count: {count}
            <button onClick={handleClick}>&gt;</button>
        </div>
    )
}
export default App;
