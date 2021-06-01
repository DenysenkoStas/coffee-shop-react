import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import headerLogo from '../../../src/assets/icons/logo.svg';
import footerLogo from '../../../src/assets/icons/logo-dark.svg';

const Container = ({mainClass, children}) => {
    const navLinks = [
        {id: 0, name: 'Coffee house', href: '/'},
        {id: 1, name: 'Our coffee', href: '/our-coffee'},
        {id: 2, name: 'For your pleasure', href: '/for-your-pleasure'}
    ];

    return (
        <>
            <Header logo={headerLogo} navLinks={navLinks}/>
            <main className={mainClass}>
                {children}
            </main>
            <Footer logo={footerLogo} navLinks={navLinks}/>
        </>
    );
};

export default Container;
