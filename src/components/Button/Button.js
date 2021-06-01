import React from 'react';
import {Link} from 'react-router-dom';
import './Button.scss';

const Button = ({children, onClick, isLink, href, className = ''}) => {
    const addClass = className && ` ${className}`;

    if (!isLink) {
        return <button className={`default-btn${addClass}`} onClick={onClick}>{children}</button>;
    } else {
        return <Link to={href} className={`default-btn${addClass}`}>{children}</Link>;
    }
};

export default Button;
