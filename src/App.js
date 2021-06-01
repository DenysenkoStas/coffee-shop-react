import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './assets/styles/main.scss';
import {CoffeeItemPage, CoffeePage, GoodsPage, MainPage} from './pages';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' component={MainPage} exact/>
                <Route path='/our-coffee' component={CoffeePage} exact/>
                <Route path='/coffee-item' component={CoffeeItemPage} exact/>
                <Route path='/for-your-pleasure' component={GoodsPage} exact/>
            </Switch>
        </Router>
    );
};

export default App;
