import React, {useContext} from 'react'
import { ModalContext } from '../contexts/ModalContext';
// import GuestCounter from './GuestCounter';
// import LocationList from './LocationList';
import InputForm from './InputForm';

function FormModal({ action }) {
    const {focused} = useContext(ModalContext)
    // Getting Data from the context
    return (
        <div className="modal">
            <div className="modal_content">
                <div className="container">
                    <InputForm action={action} />
                    <div className="detail_panel">
                        {focused}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormModal
