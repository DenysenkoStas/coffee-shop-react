import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductList.scss';

const ProductList = ({data}) => {
    return (
        <div className='product-list'>
            {data.map(({id, ...item}) => (
                <ProductCard key={id} classes='product-list__item'{...item}/>
            ))}
        </div>
    );
};

export default ProductList;
