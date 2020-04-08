import React from 'react';
import './style.css';

const SearchBar = props => {

    return (
        <div style={{ backgroundColor: 'whitesmoke', width: '100%', height: 80, alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
            <input className='input' placeholder={'Testing'}></input>            
        </div>

    )
}

export default SearchBar;