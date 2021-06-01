import React from 'react';
import TitleSection from '../../components/TitleSection/TitleSection';
import InfoSection from '../../layout/InfoSection/InfoSection';
import ProductList from '../../layout/ProductList/ProductList';
import Divider from '../../components/Divider/Divider';
import Container from '../../layout/Container/Container';
import Search from '../../components/Search/Search';
import Filter from '../../components/Filter/Filter';
import './CoffeePage.scss';

import aromistico from '../../assets/images/aromistico.jpg';
import img from '../../assets/images/girl.jpg';

const CoffeePage = () => {
    const coffeeList = [
        {id: 0, img: aromistico, title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99'},
        {id: 1, img: aromistico, title: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '6.99'},
        {id: 2, img: aromistico, title: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99'},
        {id: 3, img: aromistico, title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99'},
        {id: 4, img: aromistico, title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99'},
        {id: 5, img: aromistico, title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99'}
    ];

    const infoSection = {
        img: img,
        imgAlt: 'Girl with coffee',
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
        <Container mainClass='coffee-page'>
            <TitleSection title='Our Coffee'/>
            <InfoSection {...infoSection}/>
            <Divider linear/>
            <div className='container'>
                <div className='coffee-page__sorting sorting-section'>
                    <Search/>
                    <Filter/>
                </div>
                <ProductList data={coffeeList}/>
            </div>
        </Container>
    );
};

export default CoffeePage;
