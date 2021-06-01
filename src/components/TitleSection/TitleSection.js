import React from 'react';
import placeholder from './images/placeholder.jpg';
import './TitleSection.scss';

const TitleSection = ({title, bg}) => {
    return (
        <section className='title-section' style={{backgroundImage: `url(${bg ? bg : placeholder})`}}>
            <h1 className='title-section__title'>{title}</h1>
        </section>
    );
};

export default TitleSection;
