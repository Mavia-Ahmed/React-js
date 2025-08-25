import data from './data'

function Student(){
    return(
        <div className="container">
            <h2>Student Data</h2>
            <table>
                <tr>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Group</th>
                    <th>Fee</th>
                </tr>
                {data.map((data) => (
                    <tr key={data.id}>
                        <td>{data.rollNo}</td>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                        <td>{data.group}</td>
                        <td>{data.status == true ? "Paid" : "Unpaid"}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Student;
