import React from 'react'
import './Props.css'
function Props(data) {
    const { FirstName, LastName, id } = data;
    return (
        <div>
            <h2>User{id} : <span className='UserNames'>{FirstName} {LastName}</span></h2>
        </div>
    )
}

export default Props
