import React from 'react';
import Container from '../../layout/Container/Container';
import TitleSection from '../../components/TitleSection/TitleSection';
import InfoSection from '../../layout/InfoSection/InfoSection';
import ProductList from '../../layout/ProductList/ProductList';
import Divider from '../../components/Divider/Divider';
import './GoodsPage.scss';

import bg from '../../assets/images/coffee-2.jpg';
import aromistico from '../../assets/images/aromistico.jpg';
import img from '../../assets/images/coffee.jpg';

const GoodsPage = () => {
    const goodsList = [
        {id: 0, img: aromistico, title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99'},
        {id: 1, img: aromistico, title: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '6.99'},
        {id: 2, img: aromistico, title: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99'},
        {id: 3, img: aromistico, title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99'},
        {id: 4, img: aromistico, title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99'},
        {id: 5, img: aromistico, title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99'}
    ];

    const infoSection = {
        img: img,
        imgAlt: 'About our goods',
        title: 'About our beans',
        desc: [
            'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
            'Afraid at highly months do things on at. Situation recommend objection do intention\n' +
            'so questions. \n' +
            'As greatly removed calling pleased improve an. Last ask him cold feel\n' +
            'met spot shy want. Children me laughing we prospect answered followed. At it went\n' +
            'is song that held help face.'
        ]
    };

    return (
        <Container mainClass='goods-page'>
            <TitleSection title='Our Coffee' bg={bg}/>
            <InfoSection {...infoSection}/>
            <Divider linear/>
            <div className='goods-page__list container'>
                <ProductList data={goodsList}/>
            </div>
        </Container>
    );
};

export default GoodsPage;
