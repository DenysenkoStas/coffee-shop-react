import React from 'react';
import './Filter.scss';

const Filter = () => {
    return (
        <div className='filter-wrapper'>
            <span className='filter-wrapper__label'>Or filter</span>
            <div className='filter-wrapper__btn-group'>
                <button className='filter-wrapper__btn'>Brazil</button>
                <button className='filter-wrapper__btn'>Kenya</button>
                <button className='filter-wrapper__btn'>Columbia</button>
            </div>
        </div>
    );
};

export default Filter;
