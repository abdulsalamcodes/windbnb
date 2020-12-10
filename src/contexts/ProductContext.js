import React, {useState, useEffect, createContext} from 'react';
import data from '../stays.json'
export const ProductContext = createContext();

function ProductContextProvider(props) {
    const [stays, setStays] = useState([]);

    useEffect(() => {
        setStays(data)
    }, [])

    const filterStays = ( location, guests) => {
        const filteredStays = data.filter(stay => `${stay.city} ${stay.country}` === location && stay.maxGuests >= guests);
        console.log(filteredStays, location.length)
        if (location.length === 0) {
            setStays(data);
        } else {
            setStays(filteredStays)
        }
    }

    return (
        <ProductContext.Provider value={{data, stays, filterStays}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider
