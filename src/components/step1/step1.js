import React from 'react';
import './step1.scss';

import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';

import MainContainer from '../main-container';
import PrimaryButton from '../primary-button';
import {useData} from '../data-context/DataContext';

const Step1 = () => {
    const {data, setValues} = useData();
    const {currentStep} = data;

    const { register, handleSubmit, watch} = useForm({
        defaultValues: {
            legalStatus: data.legalStatus
        }
    });
    const watchInputs = watch("legalStatus");
    
    const history = useHistory();
    
    const onSubmit = (data) => {
        const newData = {...data, currentStep: currentStep + 1};
        setValues(newData);
        history.push('/step2');
    }

    return (
        <>
        <MainContainer currentStep={currentStep} step={1} title={'Выбор заявителя'}>
            <form onSubmit={handleSubmit(onSubmit)} className="form-status">
                <div className="form-status__block">
                    <input id="individual" type="radio" value="individual" name="legalStatus" 
                        defaultChecked={!watchInputs && true} ref={register({ required: true })}
                    />
                    <label htmlFor="individual">
                        <span className="form-status__label">Константинопольский К.К.</span>
                        <span className="form-status__label form-status__label_sign">Физическое лицо.</span>
                    </label>
                </div>
                <div className="form-status__block">
                    <input id="organization" type="radio" value="organization" name="legalStatus" 
                        ref={register({ required: true })}
                    />
                    <label htmlFor="organization">
                        <span className="form-status__label">ООО «Константинополь»</span>
                        <span className="form-status__label form-status__label_sign">Юридическое лицо</span>
                    </label>
                </div>
                <PrimaryButton>Продолжить</PrimaryButton>
            </form>
        </MainContainer>
        <MainContainer step={2} title={'Данные заявителя'}></MainContainer>
        <MainContainer step={3} title={'Согласие'}></MainContainer>
        </>
    );
}

export default Step1;