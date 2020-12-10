import React, { useContext } from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { ModalContext } from '../contexts/ModalContext.js';

const AddButton = ({ action }) => {
    return <button onClick={action} className="btn_icon">
        <AddIcon />
    </button>
}
const RemoveButton = ({ action }) => {
    return <button onClick={action} className='btn_icon'>
        <RemoveIcon />
    </button>
}

const GuestCounter = () => {
    const {counts, dispatch } = useContext(ModalContext);
    const Counter = (props) => {
        return <div>
        <div className="title">
            <h3>{props.title}</h3>
            <span className="desc_note"> {props.note}</span>
        </div>
        <div className="buttons">
            <RemoveButton action={() => dispatch({ type: props.decrement })} />
            <span>{props.count}</span>
            <AddButton action={() => dispatch({ type: props.increment })} />
        </div>
    </div>
    }
    return <div className="guest_counter">
        <Counter title="Adult" note="Ages 13 0r Above" count={counts.adultCount} increment="increment_adult" decrement="decrement_adult" />
        <Counter title="Children" note="Ages 2 to 12" count={counts.childrenCount} increment="increment_children" decrement="decrement_children" />
    </div>
        
}




export default GuestCounter;