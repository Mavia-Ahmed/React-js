//TYPE-1 PART 1     IF-ELSE STATEMENT
import Student from './Student';
function App(){
    return(
        <div>
            <Student isPass={true}/>
            <Student isPass={false}/>
        </div>
        
    )
}
export default App;



//TYPE-1 PART 2      CONDITIONAL VARIABLES
import Student from './Student'

function App(){
    return(
        <div>
            <Student grade="A" />
            
        </div>
    )
}

export default App;
