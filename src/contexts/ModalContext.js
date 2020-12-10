import React, { useState, createContext, useReducer, useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext';
import LocationList from '../components/LocationList'
import GuestCounter from "../components/GuestCounter";
export const ModalContext = createContext();

function reducer(state, action) {
    switch (action.type) {
        case 'increment_adult':
            return { ...state, adultCount: state.adultCount + 1 };
        case 'decrement_adult':
            return { ...state, adultCount: state.adultCount - 1 };
        case 'increment_children':
            return { ...state, childrenCount: state.childrenCount + 1 };
        case 'decrement_children':
            return { ...state, childrenCount: state.childrenCount - 1};
        default:
            throw new Error();
    }
}

function focusedReducer(state, action) {
    switch (action.type) {
        case 'location_list':
            return <LocationList />;
        case 'guest_counter':
            return <GuestCounter />;
        case 'set_all':
            return <AllContent />;
        default:
            return state
    }
}

const AllContent = () => {
    return <>
        <LocationList />
        <GuestCounter />
    </>
}

function ModalContextProvider(props) {
    const [counts, dispatch] = useReducer(reducer, { adultCount: 0, childrenCount: 0 })
    const [focused, focusDispatch] = useReducer(focusedReducer, <AllContent />)
    const { data } = useContext(ProductContext);

    const allLocations = data.map(stay => `${stay.city} ${stay.country}`);
    const uniqueLocations = [...new Set(allLocations)];
    const [location, setLocation] = useState(uniqueLocations[0]);
    const guests = counts.adultCount + counts.childrenCount;


    const handleLocation = (value) => {
        setLocation(value)
    }

    return (
        <ModalContext.Provider value={{ dispatch, uniqueLocations, focused, focusDispatch, counts, location, guests, handleLocation }}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider
