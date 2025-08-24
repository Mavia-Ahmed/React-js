function Student( { name = "David", age = "19" } ){       ////so in first line i have given values in parenthesis these are the default values if no data passes from parent(App.jsx) then this data will be used
    return (
        <div>
            <p>name = {name}</p>
            <p>Age = {age}</p>
        </div>
    );
}
export default Student;
