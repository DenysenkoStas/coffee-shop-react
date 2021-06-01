import React from 'react';
import './Divider.scss';

const Divider = ({light = '', classes = ''}) => {
    const color = light && ' divider--light';
    const addClass = classes && ` ${classes}`;

    return <div className={`divider${color}${addClass}`}/>;
};

export default Divider;
