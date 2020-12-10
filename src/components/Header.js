import React, {useState, useContext} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import FormModal from './FormModal';
import logo from '../logo.svg'
import { ModalContext } from '../contexts/ModalContext';


function Header() {
    const {location, guests, focusDispatch } = useContext(ModalContext);
    const [show, setShow] = useState(false);
    const showModal = (type) => {
        focusDispatch({type: type})
        setShow(!show);
    }

 

   
    return (

        <div className="header">
            {show ? <FormModal  action={showModal} /> : '' }
            <div className=" space_item  container">
                <div className="logo_wrapper">
                    <img src={logo} alt="" />
                </div>
                <div className="d-flex search_form">
                    <input type="text" readOnly className="search_location" placeholder={location} onClick={() => showModal('location_list')}  />
                    <input type="text" readOnly className="search_guest" placeholder={`${guests === 0 ? "Add" : guests} Guests`} onClick={() => showModal('guest_counter')} />
                        <button className="submit_button" onClick={() => showModal('set_all')}>
                            <SearchIcon fontSize="large" />
                        </button>
                </div>

            </div>
        </div>
    )
}

export default Header
