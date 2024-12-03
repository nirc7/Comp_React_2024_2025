import React from 'react'

export default function FCInputs(props) {

    let id = null;
    let name = null;
    let grade = null;

    const chgId = (e) => {
        id = Number(e.target.value);
    }

    const chgName = (e) => {
        name = e.target.value;
    }

    const chgGarde = (e) => {
        grade = Number(e.target.value);
    }

    const btnAddStudent = () => {
        props.sendStudent2Parent(id, name, grade);
    }

    return (
        <div style={{ border: 'solid yellow 2px', margin: 5, padding: 5, borderRadius: 10 }}>
            ID: <input type="text" onChange={chgId} /> <br />
            Name: <input type="text" onChange={chgName} /> <br />
            Grade: <input type="text" onChange={chgGarde} /> <br /> <br />
            <button className='btn btn-success' onClick={btnAddStudent} >Add Student</button> <br />
        </div>
    )
}
