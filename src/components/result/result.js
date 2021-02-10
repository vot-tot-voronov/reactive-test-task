import React from 'react';
import MainContainer from '../main-container';
import PrimaryButton from '../primary-button';

const Result = () => {
    return (
        <MainContainer step={0} title={'Заявление принято'}>
            <div className="result">
                <p className="result__text">
                    Номер заявления<span> RU-1234567.</span> Максимальный срок предоставления услуги — 20 рабочих дней. 
                    Следите за статусом заявления в <a href="\#"> Личном кабинете.</a> 
                </p>
                <p className="result__text result__text_last">
                    Если у вас остались вопросы по оказанию услуги, пожалуйста, обращайтесь по телефону 
                    +7 (342) 123-45-67.
                </p>
                <div className="result__buttons">
                    <PrimaryButton mod="btn_back">Вернуться в каталог</PrimaryButton>
                    <PrimaryButton mod="btn_cabinet">Перейти в личный кабинет</PrimaryButton>
                </div>
            </div>
        </MainContainer>
    );
}

export default Result;