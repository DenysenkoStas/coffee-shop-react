import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {Switch, Route} from 'react-router-dom';
import {MainPage, CoffeePage, CoffeeItemPage, GoodsPage} from '../../pages';

const App = () => {
    const navLinks = [
        {id: 0, name: 'Coffee house', href: '/'},
        {id: 1, name: 'Our coffee', href: '/our-coffee'},
        {id: 2, name: 'For your pleasure', href: '/for-your-pleasure'}
    ];

    return (
        <>
            <Header navLinks={navLinks}/>
            <Switch>
                <Route path='/' component={MainPage}/>
                <Route path='/our-coffee' component={CoffeePage}/>
                <Route path='/coffee-item' component={CoffeeItemPage}/>
                <Route path='/for-your-pleasure' component={GoodsPage}/>
            </Switch>
            <Footer/>
        </>
    );
};

export default App;
