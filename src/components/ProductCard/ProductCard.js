import React from 'react';
import placeholder from './icons/placeholder.png';
import './ProductCard.scss';

const ProductCard = ({img, title, country, price, classes = ''}) => {
    const addClass = classes && ` ${classes}`;
    const productTitle = title ? title : 'No title specified';

    return (
        <div className={`product-card${addClass}`}>
            <img className='product-card__img' src={img ? img : placeholder} alt={productTitle}/>
            <span className='product-card__title'>{productTitle}</span>
            {country && <span className='product-card__country'>{country}</span>}
            <span className='product-card__price'>{price ? `${price}$` : 'Price not available'}</span>
        </div>
    );
};

export default ProductCard;
