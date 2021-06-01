import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductList.scss';

const ProductList = ({data, opacity = ''}) => {
    const setOpacity = opacity && ' product-list__item--opacity';

    return (
        <div className='product-list'>
            {data.map(({id, ...item}) => (
                <ProductCard key={id} classes={`product-list__item${setOpacity}`} {...item}/>
            ))}
        </div>
    );
};

export default ProductList;
