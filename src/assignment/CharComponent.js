import React from 'react'
const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'text-center',
    margin: '1rem',
    border: '1px solid black'
}

function CharComponent({ letter, clicked }) {
    return (
            <span onClick={clicked} style={style}>{letter}</span>
    )
}

export default CharComponent
