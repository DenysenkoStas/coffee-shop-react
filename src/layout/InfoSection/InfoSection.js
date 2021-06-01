import React from 'react';
import Divider from '../../components/Divider/Divider';
import './InfoSection.scss';

const InfoSection = ({img, imgAlt, title, desc, classes = ''}) => {
    const addClass = classes && ` ${classes}`;
    const withImg = img ? ' info-section__col--with-img' : '';

    return (
        <section className={`info-section${addClass}`}>
            <div className='info-section__container container'>
                {img && (
                    <div className='info-section__col'>
                        <img className='info-section__img' src={img} alt={imgAlt ? imgAlt : title}/>
                    </div>
                )}
                <div className={`info-section__col${withImg} text-center`}>
                    <h2 className='info-section__title section-title'>{title ? title : 'Title section'}</h2>
                    <Divider/>
                    {desc && (
                        <div className='info-section__desc'>
                            {desc.map((string, index) => <p key={index}>{string}</p>)}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
