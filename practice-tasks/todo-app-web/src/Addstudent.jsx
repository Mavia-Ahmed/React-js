import React, { useState } from 'react'

export const Addstudent = ({ onAddHandler }) => {
    const [name, setName] = useState("")

    const addStudent = () => {
        console.log(name)

        if (!name) {
            alert("Please insaan ka bacha bano")
            return
        }

        let data = {
            name,
        }
        onAddHandler(data)
    }
    return (
        <div className="box">
            <h2>To-do List App</h2>
            <div>
                <input className="put" onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" />
                <button className="btn2" onClick={addStudent}>+</button>
            </div>
        </div>

    )
}