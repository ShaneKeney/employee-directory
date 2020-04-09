import React from 'react';
import './style.css';

const SearchBar = props => {

    const handleInputChange = e => {
        console.log(e.nativeEvent.target.value)

    }

    return (
        <div style={{ backgroundColor: 'whitesmoke', width: '100%', height: 80, alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
            <input 
                className='input' 
                placeholder={'Testing'}
                onChange={handleInputChange}
            ></input>            
        </div>

    )
}

export default SearchBar;