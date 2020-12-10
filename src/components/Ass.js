import React, { Component } from 'react'
import CharComponent from '../assignment/CharComponent'
import TextValidation from '../assignment/TextValidation'

export default class Ass extends Component {
    state = {
        text: ''
    }

    handleInput = (e) => {
        this.setState({
            text: e.target.value,
        })
    }

    handleClick = (id) => {
        const textArr = this.state.text.split('');
        textArr.splice(id, 1);
        const newText = textArr.join('');

        // OR THIS
        // const current = textArr.find((el, i) => i === id);
        // const newText = textArr.filter(letter => letter !== current).join('');
        this.setState({
            text: newText
        })
    }
    render() {
        const letters = this.state.text.split('');
        return (
            <div className="tx-center wrapper">
                <input type="text" placeholder="Enter a Text" value={this.state.text} onChange={this.handleInput} />
                <p>{this.state.text}</p>
                <TextValidation length={this.state.text.length} />
                {this.state.text.length !== 0 ?
                    letters.map((letter, index) => <CharComponent letter={letter} clicked={() => this.handleClick(index)} />)
                    : null}
            </div>
        )
    }
}
