import React, { Component } from 'react'
import UserInput from '../assignment/UserInput';
import UserOutput from '../assignment/UserOutput';

const style = {
    textAlign: 'center',
    boxShadow: '0px 2px 2px 2px rgba(0,0,0, .1)',
    width: 'max-content',
    margin: '5rem auto',
    padding: '1rem'
}

const button = {
    padding: '1rem',
    fontFamily: 'inherit',
    margin: '1rem 0',
}

const Person = (props) => {
    return (
        <>
            <p onclick={props.action}>My name is {props.name} and I am {props.age}</p>
            <input type="text" onChange={props.change_name} value={props.name} />
            <input type="number" onChange={props.change_age} value={props.age} />
        </>
    )
}

export default class ReactPractice extends Component {
    state = {
        username: 'manu',
        showPerson: false,
        persons: [
            {id: 1,  name: 'max', age: 35 },
            { id: 2, name: 'max', age: 45 },
            {id: 3,  name: 'max', age: 55 }
        ],

    }

    changeNameHandler = (e, id, value) => {
        // const person = Object.assign({}, this.state.persons[personIndex]) : alternative to spread operator.
        // const person = this.state.persons.find(element => element.id === id);

        // get the index of the element to manipulate.
        const personIndex = this.state.persons.findIndex(p =>  p.id === id );
        
        // implement the change i.e setting the name into the main input value
        const person = {...this.state.persons[personIndex]};
        person[value] = e.target.value;
        
        // copy the previous value of the state to avoid mutating the original state
        const persons = [...this.state.persons];
        persons[personIndex] = person

        // Update the state
        this.setState({persons: persons})
        console.log(person)
        
     
    }

    // Toggle the list component
    toggleShow = () => {
        let isShow = this.state.showPerson;
        this.setState({ showPerson: !isShow })
    }

    // change name by input.
    changeName = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    
    render() {
        let lists = null;
        if (this.state.showPerson) {
            lists = this.state.persons.map(person =>
                <Person
                    change_name={(e) => this.changeNameHandler(e, person.id, 'name')}
                    change_age={(e) => this.changeNameHandler(e, person.id, 'age')}
                    key={person.id} 
                    name={person.name}
                    age={person.age}
                />)
        }
        return (
            <div className="text-center" style={style}>
                <button onClick={this.toggleShow} style={button}>Toggle Show</button>
                {lists}
                <UserOutput name={this.state.username} />
                <UserInput action={this.changeName} value={this.state.username} />
            </div>
        )
    }
}
