import React, {useContext} from 'react'
import { ModalContext } from '../contexts/ModalContext.js';
import SearchIcon from '@material-ui/icons/Search';
import { ProductContext } from '../contexts/ProductContext.js';


function InputForm({action}) {
    const {location, guests, focusDispatch } = useContext(ModalContext);
    const {filterStays } = useContext(ProductContext);

    const filterList = (e) => {
        e.preventDefault();
        action();
        filterStays(location, guests)
    }

    return (
        <div>
            <form className="modal_form" onSubmit={filterList}>
        <input
            type="text"
            readOnly required
            className="search_location"
            value={location}
            placeholder="Add Location"
            onFocus={() =>  focusDispatch({type: 'location_list'})}
        />
        <input
            type="text"
            readOnly required
            className="search_guest"
            placeholder="Add guests"
            value={`${guests} guests `}
            onFocus={() =>  focusDispatch({type: 'guest_counter'})}
        />
        <div className="button_wrapper">
            <button className="modal_button d-flex" type="submit"> <SearchIcon fontSize="large" /> Search</button>
        </div>
    </form>
        </div>
    )
}

export default InputForm
