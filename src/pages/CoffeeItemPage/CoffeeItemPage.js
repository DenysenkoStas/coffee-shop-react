import React from 'react';
import Container from '../../layout/Container/Container';
import TitleSection from '../../components/TitleSection/TitleSection';
import Divider from '../../components/Divider/Divider';
import './CoffeeItemPage.scss';

import bg from '../../assets/images/coffee-2.jpg';
import img from '../../assets/images/aromistico-2.jpg';

const CoffeeItemPage = () => {
    const itemData = {
        title: 'AROMISTICO Coffee 1 kg',
        country: 'Brasil',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
            'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
            'nisi ut aliquip ex ea commodo consequat.',
        price: '16.99'
    };

    const {title, country, desc, price} = itemData;

    return (
        <Container mainClass='item-page'>
            <TitleSection title={title} bg={bg}/>
            <div className='item-page__container container'>
                <div className='item-page__col'>
                    <img className='item-page__img' src={img} alt='alt'/>
                </div>
                <div className='item-page__col'>
                    <h2 className='item-page__title section-title text-center'>About it</h2>
                    <Divider className='item-page__divider'/>
                    <p className='item-page__desc'>
                        <span className='item-page__label'>Country:</span>
                        {country}
                    </p>
                    <p className='item-page__desc'>
                        <span className='item-page__label'>Description:</span>
                        {desc}
                    </p>
                    <p className='item-page__desc'>
                        <span className='item-page__label'>Price:</span>
                        <span className='item-page__price'>{price}$</span>
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default CoffeeItemPage;
