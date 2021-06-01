import React from 'react';
import './Search.scss';

const Search = () => {
    return (
        <div className='search-wrapper'>
            <label className='search-wrapper__label' htmlFor='search'>Looking for</label>
            <input className='search-wrapper__input' id='search' type='text' placeholder='start typing here...'/>
        </div>
    );
};

export default Search;
