import house from './data'

function Task(){
    return(
        <div className = "container">
            {house.map((house) => (
                <div className = "box" key={house.id}>
                    <img src={house.image} alt="" />
                    <p>Name: {house.head}</p>
                    <p>Description: {house.description}</p>
                    <p>Status: {house.status == true ? "Soled out" : "Available"}</p>
                </div>
            ))}
        </div>
    )
}
export default Task;
