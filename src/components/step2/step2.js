import React from 'react';

import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import MainContainer from '../main-container';
import PrimaryButton from '../primary-button';
import {useData} from '../data-context/DataContext';

const Step2 = () => {
    const {data, setValues} = useData();
    //matches(/\+7 \d{3} \d{3}-\d{2}-\d{2}/) phone
    const schema = yup.object().shape({
        lastName: yup.string().matches(/^([^0-9]*)$/).required(),
        firstName: yup.string().matches(/^([^0-9]*)$/).required(),
        middleName: yup.string().matches(/^([^0-9]*)$/).required(),
        email: yup.string().email().required(),
        phone: yup.string().required(),
        passport: yup.string().matches(/^([^0-9]*)$/).required(),
        series: yup.number().positive().integer().required(),
        number: yup.number().positive().integer().required(),
        whenGiven: yup.number().positive().integer().required(),
        monthsGiven: yup.number().positive().integer().required(),
        yearGiven: yup.number().positive().integer().required()
    });


    const { register, handleSubmit} = useForm({
        defaultValues: {
            lastName: data.lastName,
            firstName: data.firstName,
            middleName: data.middleName,
            email: data.email,
            phone: data.phone,
            passport: data.passport,
            series: data.series,
            number: data.number,
            whenGiven: data.whenGiven,
            monthsGiven: data.monthsGiven,
            yearGiven: data.yearGiven
        },
        mode: "onBlur",
        resolver: yupResolver(schema)
    });
    const history = useHistory();
    const {currentStep} = data;
    
    const onSubmit = (data) => {
        const newData = {...data, currentStep: currentStep + 1};
        setValues(newData);
        history.push('/step3');
    }

    return (
        <>
        <MainContainer step={1} title={'Выбор заявителя'}></MainContainer>
        <MainContainer step={2} title={'Данные заявителя'}>
            <form noValidate onSubmit={handleSubmit(onSubmit)} className="form-about">
                <div className="form-about__block-input">
                    <input id="lastName" type="text" name="lastName" ref={register} />
                    <label htmlFor="lastName" className="form-about__label">
                        <span>Фамилия</span>
                    </label>
                </div>
                <div className="form-about__block-input">
                    <input id="firstName" type="text" name="firstName" ref={register} />
                    <label htmlFor="firstName" className="form-about__label">
                        <span>Имя</span>
                    </label>
                </div>
                <div className="form-about__block-input">
                    <input id="middleName" type="text" name="middleName" ref={register} />
                    <label htmlFor="middleName" className="form-about__label">
                        <span>Отчество</span>
                    </label>
                </div>
                <div className="form-about__block-input">
                    <input id="email" type="email" name="email" ref={register} />
                    <label htmlFor="email" className="form-about__label">
                        <span>Электронная почта</span>
                    </label>
                </div>
                <div className="form-about__block-input">
                    <input id="phone" type="tel" name="phone" ref={register} />
                    <label htmlFor="phone" className="form-about__label">
                        <span>Телефон</span>
                    </label>
                </div>
                <p className="form-about__document">Документ, удостоверяющий личность</p>
                <div className="form-about__block-input">
                    <input id="passport" type="text" name="passport" ref={register} />
                    <label htmlFor="passport" className="form-about__label">
                        <span>Документ</span>
                    </label>
                </div>
                <div className="form-about__series-number">
                    <div className="form-about__passbort-input">
                        <input id="series" type="number" name="series" ref={register} />
                        <label htmlFor="series" className="form-about__label">
                            <span>Серия</span>
                        </label>
                    </div>
                    <div className="form-about__passbort-input">
                        <input id="number" type="number" name="number" ref={register} />
                        <label htmlFor="number" className="form-about__label">
                            <span>Номер</span>
                        </label>
                    </div>
                </div>
                <p className="form-about__when">Когда выдан</p>
                <div className="form-about__date-block">
                    <div className="form-about__date-input">
                        <input id="whenGiven" type="number" name="whenGiven" ref={register} />
                        <label htmlFor="whenGiven" className="form-about__label">
                            <span>День</span>
                        </label>
                    </div>
                    <div className="form-about__date-input">
                        <input id="monthsGiven" type="number" name="monthsGiven" ref={register} />
                        <label htmlFor="monthsGiven" className="form-about__label">
                            <span>Месяц</span>
                        </label>
                    </div>
                    <div className="form-about__date-input">
                        <input id="yearGiven" type="number" name="yearGiven" ref={register} />
                        <label htmlFor="yearGiven" className="form-about__label">
                            <span>Год</span>
                        </label>
                    </div>
                </div>
                <PrimaryButton>Продолжить</PrimaryButton>
            </form>
        </MainContainer>
        <MainContainer step={3} title={'Согласие'}></MainContainer>
        </>
    );
}

export default Step2;