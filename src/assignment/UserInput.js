import React from 'react'

const style = {
    padding: '1rem',
    fontFamily: 'inherit',
    margin: '1rem 0'
}
function UserInput({action, value}) {
    return (
        <div>
            <input type="text" placeholder="Enter FirstName" style={style} onChange={action} value={value}/>
        </div>
    )
}

export default UserInput
