import React from 'react';
import done from '../../images/done.png';
export const Circle = ({currentStep, step, title}) => {
    let activeDefiner;
    if (currentStep === step) {
        activeDefiner = {
            roundColor: "form-step__round form-step__round_active",
            titleColor: "form-step__title form-step__title_active"
        };
        return (
            <>
                <div className={activeDefiner.roundColor}>{step}</div>
                <h2 className={activeDefiner.titleColor}>{title}</h2>
            </>
        );
    } else if (currentStep < step) {
        activeDefiner = {
            roundColor: "form-step__round",
            titleColor: "form-step__title"
        };
        return (
            <>
                <div className={activeDefiner.roundColor}>{step}</div>
                <h2 className={activeDefiner.titleColor}>{title}</h2>
            </>
        );
    } else if (currentStep > step) {
        activeDefiner = {
            roundColor: "form-step__round form-step__round_done",
            titleColor: "form-step__title form-step__title_active"
        };
        return (
            <>
                <div className={activeDefiner.roundColor}><img src={done} alt="Успешно!"/></div>
                <h2 className={activeDefiner.titleColor}>{title}</h2>
            </>
        );
    }
};