import React from 'react';
import './style.css';

const GridHeader = props => {

    return (
        <div className='section-container'>
            <p className='section'>Image</p>
            <p className='section'>Name</p>
            <p className='section'>Place</p>
            <p className='section'>Email</p>
            <p className='section'>DOB</p>
        </div>
    )
}

export default GridHeader;