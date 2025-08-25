//Example 1: Simple List
function App() {
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <div>
      <h2>Fruits List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


//Example 2: Keys with IDs
function App() {
  const students = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Sara" },
    { id: 3, name: "Ahmed" },
  ];

  return (
    <div>
      <h2>Students List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
