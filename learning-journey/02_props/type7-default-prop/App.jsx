import Student from './Student';

function App(){
    return (
        <div>
            <Student /> //this one is for showing dta of default values
            <Student name="Mulan" age="21"/>  //this is the way of passing data from parent to child and the concept is called prop 
        </div>
    )
};

export default App;
