import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';

const Header = ({navLinks}) => {
    return (
        <header className='header'>
            Header
            <nav className='header__nav'>
                {navLinks.map(link => (
                    <NavLink
                        key={link.id}
                        className='header__nav-item'
                        activeClassName='header__nav-item--active'
                        to={link.href}
                        exact
                    >
                        {link.name}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
};

export default Header;
