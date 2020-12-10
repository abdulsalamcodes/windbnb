import React from 'react'

function TextValidation(props) {
    const text = () => {
        if (props.length === 0) return 'Text Empty';
        if (props.length <= 5) {
            return 'Text Too Short '
        } else if (props.length >= 15) {
            return 'Text too Long '
        } else {
            return 'Text Okay!'
        }
    }

    return (
        <div>
            <p>{text()}</p>
        </div>
    )
}

export default TextValidation
