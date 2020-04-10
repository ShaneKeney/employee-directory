import React, { useState, useEffect } from 'react';
import './style.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { orange } from '@material-ui/core/colors';

const GridHeader = props => {

    const [arrowState, setArrowState] = useState(true) // will indicate pointed down

    return (
        <div className='section-container'>
            <p className='section image'>Image</p>

            <div className={'section name'} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <p className='section'>Name</p> 
                
                { arrowState && 
                    <ArrowDropDownIcon 
                        style={{color: orange[500]}} 
                        fontSize={'small'}  
                        onClick={() => { 
                            setArrowState(!arrowState)
                            props.sortUsers(arrowState);
                        }}
                    /> 
                }

                { !arrowState && 
                    <ArrowDropUpIcon 
                        style={{color: orange[500]}} 
                        fontSize={'small'} 
                        onClick={() => { 
                            setArrowState(!arrowState)
                            props.sortUsers(arrowState);
                        }} 
                    />
                }
            </div>

            <p className='section place'>Place</p>
            <p className='section email'>Email</p>
            <p className='section dob'>DOB</p>
        </div>
    )
}

export default GridHeader;