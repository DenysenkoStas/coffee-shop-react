import React from 'react';
import {Link} from 'react-router-dom';
import './Button.scss';

const Button = ({children, onClick, isLink, href}) => {
    if (!isLink) {
        return <button className='default-btn' onClick={onClick}>{children}</button>;
    } else {
        return <Link to={href} className='default-btn'>{children}</Link>;
    }
};

export default Button;
