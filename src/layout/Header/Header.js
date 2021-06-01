import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';

const Header = ({logo, navLinks}) => {
    return (
        <header className='header'>
            <div className='header__container'>
                <img className='header__logo' src={logo} alt='logo'/>
                <nav className='header__nav'>
                    {navLinks.map(link => (
                        <NavLink
                            key={link.id}
                            className='header__link'
                            activeClassName='header__nav-item--active'
                            to={link.href}
                            exact
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
