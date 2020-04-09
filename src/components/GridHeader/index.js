import React, { useState, useEffect } from 'react';
import './style.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { orange } from '@material-ui/core/colors';

const GridHeader = props => {

    const [arrowState, setArrowState] = useState(true) // will indicate pointed down

    return (
        <div className='section-container'>
            <p className='section'>Image</p>

            <div style={{display: 'flex', flexDirection: 'row'}}>
                <p className='section'>Name</p> 
                
            { arrowState && <ArrowDropDownIcon style={{color: orange[500]}} fontSize={'small'}  onClick={() => { setArrowState(!arrowState)}} /> }
            { !arrowState && <ArrowDropUpIcon style={{color: orange[500]}} fontSize={'small'} onClick={() => { setArrowState(!arrowState)}} />}
            </div>

            <p className='section'>Place</p>
            <p className='section'>Email</p>
            <p className='section'>DOB</p>
        </div>
    )
}

export default GridHeader;