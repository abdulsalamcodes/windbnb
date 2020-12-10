import React, { useContext } from 'react'
import RoomIcon from '@material-ui/icons/Room';
import { ModalContext } from '../contexts/ModalContext';


function LocationList() {
    const { uniqueLocations, handleLocation } = useContext(ModalContext);
    return (
        <ul>
            <div className="location_lists">
                {uniqueLocations.map(location =>
                    <li key={location} onClick={() => handleLocation(location)} className="location_list"><RoomIcon /> {location}</li>
                )}
            </div>
        </ul>
    )
}

export default LocationList
