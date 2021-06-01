import React from 'react';
import './Divider.scss';

const Divider = ({light = '', linear = '', className = ''}) => {
    const color = light && ' divider--light';
    const type = linear && ' divider--linear';
    const addClass = className && ` ${className}`;

    return <div className={`divider${color}${type}${addClass}`}/>;
};

export default Divider;
