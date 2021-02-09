import React from 'react';
import {useHistory} from 'react-router-dom';
import {useData} from '../data-context/DataContext';

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
        } else if (currentStep === 1 && step <= 1) {
            history.push('/');
        }
    }
    const activeDefiner = currentStep === step ?
    {
        roundColor: "form-step__round form-step__round_active",
        titleColor: "form-step__title form-step__title_active"
    } :
    {
        roundColor: "form-step__round",
        titleColor: "form-step__title"
    };
    const lastMarginBottom = step === 3 ? "last-container_margin-bottom" : "";
    return (
        <section className={`container ${lastMarginBottom}`}>
            <div className="form-container">
                <div className="form-step" onClick={goBackHandler}>
                    <div className={activeDefiner.roundColor}>{step}</div>
                    <h2 className={activeDefiner.titleColor}>{title}</h2>
                </div>
                {children}
            </div>
        </section>
    );
};

export default MainContainer;