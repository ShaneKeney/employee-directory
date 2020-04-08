import React from 'react';
import './style.css';

const Header = props => {
    return (
        <div className="header d-flex w-100">
            <p className="title">Employee Directory</p>
            <p className="sub-text">Click on carrots to filter by heading or use the search box to narrow your results.</p>
        </div>
    )
}

export default Header;