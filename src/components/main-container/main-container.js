import React from 'react';
import {useHistory} from 'react-router-dom';
import {useData} from '../data-context/DataContext';
import './main-container.scss'

const MainContainer = ({children, step, title}) => {
    const history = useHistory();
    const {data, setValues} = useData();
    const {currentStep} = data;
    const goBackHandler = () => {
        if ((currentStep === 2 && step === 1) || (currentStep === 3 && step === 1)) {
            setValues({currentStep: step});
            history.push('/');
        } else if (currentStep === 3 && step === 2) {
            setValues({currentStep: step});
            history.push('/step2');
        }
    }
    return (
        <div className="container">
            <div className="form-container">
                <div className="form-step">
                    <div className="form-step__round">{step}</div>
                    <h2 onClick={goBackHandler} className="form-step__title">{title}</h2>
                </div>
                {children}
            </div>
        </div>
    );
};

export default MainContainer;