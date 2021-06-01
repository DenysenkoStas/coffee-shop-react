import React from 'react';
import Divider from '../../components/Divider/Divider';
import Button from '../../components/Button/Button';
import './HeroSection.scss';

import bg from '../../assets/images/desk.jpg';

const HeroSection = () => {
    return (
        <section className='hero-section section-wrap' style={{backgroundImage: `url(${bg})`}}>
            <div className='hero-section__container container text-center'>
                <h1 className='hero-section__title'>Everything You Love About Coffee</h1>
                <Divider light/>
                <div className='hero-section__desc'>
                    <p className='hero-section__desc-item'>We makes every day full of energy and taste</p>
                    <p className='hero-section__desc-item'>Want to try our beans?</p>
                </div>
                <Button isLink href='/our-coffee'>More</Button>
            </div>
        </section>
    );
};

export default HeroSection;
