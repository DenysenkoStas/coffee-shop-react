import React from 'react';
import Container from '../../layout/Container/Container';
import HeroSection from '../../layout/HeroSection/HeroSection';
import InfoSection from '../../layout/InfoSection/InfoSection';
import ProductList from '../../layout/ProductList/ProductList';
import './MainPage.scss';

import bg from '../../assets/images/paper.png';
import solimo from '../../assets/images/solimo.jpg';
import presto from '../../assets/images/presto.jpg';
import aromistico from '../../assets/images/aromistico.jpg';

const MainPage = () => {
    const bestGoods = [
        {id: 0, img: solimo, title: 'Solimo Coffee Beans 2 kg', price: '10.73'},
        {id: 1, img: presto, title: 'Presto Coffee Beans 1 kg', price: '15.99'},
        {id: 2, img: aromistico, title: 'AROMISTICO Coffee 1 kg', price: '6.99'}
    ];

    const infoSection = {
        title: 'About us',
        desc: [
            'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n' +
            'Afraid at highly months do things on at. Situation recommend objection do intention\n' +
            'so questions. As greatly removed calling pleased improve an. Last ask him cold feel\n' +
            'met spot shy want. Children me laughing we prospect answered followed. At it went\n' +
            'is song that held help face.',
            'Now residence dashwoods she excellent you. Shade being under his bed her, Much\n' +
            'read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant\n' +
            'horrible but confined day end marriage. Eagerness furniture set preserved far\n' +
            'recommend. Did even but nor are most gave hope. Secure active living depend son\n' +
            'repair day ladies now.'
        ]
    };

    return (
        <Container mainClass='main-page'>
            <HeroSection/>
            <InfoSection classes='main-page__info section-wrap'{...infoSection}/>
            <section className='best-goods-section section-wrap' style={{backgroundImage: `url(${bg})`}}>
                <div className='container'>
                    <h2 className='best-goods-section__title section-title text-center'>Our best</h2>
                    <ProductList data={bestGoods} opacity/>
                </div>
            </section>
        </Container>
    );
};

export default MainPage;
