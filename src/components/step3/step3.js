import React from 'react';

import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';

import MainContainer from '../main-container';
import PrimaryButton from '../primary-button';
import {useData} from '../data-context/DataContext';
import Swal from 'sweetalert2';

const Step3 = () => {
    const {data, setValues} = useData();
    const { register, handleSubmit} = useForm({
        defaultValues: {
            agreeWithRules: data.agreeWithRules,
            notificated: data.notificated
        }
    });

    const history = useHistory();
    const {currentStep} = data;
    
    const onSubmit = (data) => {
        const newData = {...data, currentStep: currentStep + 1};
        Swal.fire(
            'Успех!',
            'Ваша форма успешно отправлена!',
            'success'
        );
        setValues(newData);
        history.push('/result');
    }
    return (
        <>
        <MainContainer step={1} title={'Выбор заявителя'}></MainContainer>
        <MainContainer step={2} title={'Данные заявителя'}></MainContainer>
        <MainContainer step={3} title={'Согласие'}>
            <form onSubmit={handleSubmit(onSubmit)} className="form-agree">
                <div className="form-agree__text">
                    <p className="form-agree__label">
                        Требуется ваше согласие по следующим пунктам:
                    </p>
                    <ul className="form-agree__ul">
                        <li className="form-agree__ul-li">
                            Я подтверждаю, что вся представленная информация является достоверной и точной;
                        </li>
                        <li className="form-agree__ul-li">
                            Я несу ответственность в соответствии с действующим законодательством Российской Федерации 
                            за предоставление заведомо ложных или неполных сведений;
                        </li>
                        <li className="form-agree__ul-li">
                            Я выражаю свое согласие на необходимое использование и обработку своих персональных данных, в том 
                            числе в информационных системах;
                        </li>
                        <li className="form-agree__ul-li">
                            Со сроками оказания государственной услуги ознакомлен.
                        </li>
                    </ul>
                </div>
                <div className="form-status__block">
                    <input id="agreeWithRules" type="checkbox" value="agree" name="agreeWithRules" 
                        ref={register({required: true})}
                    />
                    <label htmlFor="agreeWithRules">
                        <span className="form-agree__label form-agree__label-normal">Я подтверждаю свое согласие со всеми вышеперечисленными пунктами</span>
                    </label>
                </div>
                <div className="form-status__block">
                    <input id="notificated" type="checkbox" value="notificated" name="notificated" 
                        ref={register({required: true})}
                    />
                    <label htmlFor="notificated">
                        <span className="form-agree__label form-agree__label-normal">Я уведомлен о том, что результат будет получен в электронном виде</span>
                    </label>
                </div>
                <div className="form-status__block">
                    <p className="form-agree__bell">
                        Пожалуйста, еще раз внимательно проверьте все данные перед отправкой
                    </p>
                </div>
                <PrimaryButton mod="btn_send">Отправить</PrimaryButton>
                <div className="form-status__block">
                    <p className="form-agree__agreements">
                        Нажимая кнопку «Отправить», вы соглашаетесь с 
                        <a href="\#" className="form-agree__agreements_link"> правилами хранения и обработки персональных данных</a>
                    </p>
                </div>
            </form>
        </MainContainer>
        </>
    );
}

export default Step3;