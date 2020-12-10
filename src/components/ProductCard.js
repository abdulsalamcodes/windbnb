import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';
function ProductCard(props) {
    return (
        <div>
            <div className="photo_wrapper">
                <img className="product_photo" src={props.imgSource} alt={props.title} />
            </div>

            <div className="product_details">
                <div className="space_item">
                    <div className="d-flex">
                        {props.superHost ? <div className="product_host">Super host</div> : ''}
                        <div className="product_type">{props.type}. {props.beds ? <>{props.beds} beds </> : ''} </div>
                    </div>
                    <div className="product_rate d-flex"><StarRateIcon htmlColor="#EB5757" fontSize="large" /> {props.rating}</div>
                </div>
            </div>
            <div className="product_title">
                {props.title}
            </div>
        </div>
    )
}

export default ProductCard
