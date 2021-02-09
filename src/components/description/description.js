import React from 'react';
import './description.scss';

import Emblem from '../../images/emblem.png';

const Description = () => {
    return (
        <section className="description container">
            <div className="description__text-block">
                <h1 className="description__title">Выдача градостроительного плана земельного участка</h1>
                <p className="description__text">Градостроительный план земельного участка выдается в целях обеспечения субъектов градостроительной деятельности информацией, необходимой для 
                    архитектурно&#8209;строительного проектирования, строительства, реконструкции объектов капитального 
                    строительства в границах земельного участка.
                </p>
            </div>
            <div className="description__service-block">
                <img src={Emblem} alt="Герб Российской Федерации" className="description__logo"/>
                <p className="description__logo-descr">Услугу предоставляет</p>
                <p className="description__service-provider">Орган местного самоуправления</p>
            </div>
        </section>
    );
}

export default Description;