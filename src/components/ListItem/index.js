import React from 'react';
import './style.css';

const ListItem = props => {
    const { position, image, email, location, fullname, birthdate } = props;

    const style = {

    }

    if(position % 2 === 0) {
        style.backgroundColor = 'lightgray'
    } else {
        style.backgroundColor = 'whitesmoke'
    }

    return (
        <div className='list-container' style={style}>
            <img className='item image' src={image} alt={'profile'} />
            <p className='item name'>{fullname}</p> 
            <p className='item place'>{location}</p>
            <p className='item email link'>{email}</p>
            <p className='item dob'>{birthdate.substr(0, 10)}</p>
        </div>
    )
}

export default ListItem;