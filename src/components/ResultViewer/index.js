import React from 'react';
import './style.css';
import GridHeader from '../GridHeader';
import SearchBar from '../SearchBar';
import ListItem from '../ListItem';

const ResultViewer = props => {

    return (
        <div className='container'>
            <SearchBar />
            <GridHeader />
            { props.data.map((item, index) => {
                return (
                    <ListItem 
                        key={index}
                        position={index}
                        image={item.picture.thumbnail}
                        email={item.email}
                        location={item.location.state}
                        fullname={`${item.name.first} ${item.name.last}`}
                        birthdate={item.dob.date}
                    />
                )
            })}
        </div>
    )
}

export default ResultViewer;