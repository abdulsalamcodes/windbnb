import React from 'react'

function UserOutput(props) {
    return (
        <div>
            <p>I am a software Developer</p>
    <p>My name is <span style={{fontWeight: 'bold'}}>{props.name}</span></p>
        </div>
    )
}

export default UserOutput
