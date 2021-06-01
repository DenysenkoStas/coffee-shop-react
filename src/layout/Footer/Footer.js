import React from 'react';
import {Link} from 'react-router-dom';
import Divider from '../../components/Divider/Divider';
import './Footer.scss';

const Footer = ({logo, navLinks}) => {
    return (
        <footer className='footer'>
            <div className='footer__nav'>
                <img className='footer__logo' src={logo} alt='logo'/>
                {navLinks.map(link => (
                    <Link
                        key={link.id}
                        className='footer__link'
                        to={link.href}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
            <Divider/>
        </footer>
    );
};

export default Footer;
