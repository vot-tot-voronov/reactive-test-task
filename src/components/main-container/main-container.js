import React from 'react';
import {useHistory} from 'react-router-dom';
import {useData} from '../data-context/DataContext';
import {Circle} from '../circle/circle';

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
    const lastMarginBottom = step === 3 ? "last-container_margin-bottom" : "";
    return (
        <section className={`container ${lastMarginBottom}`}>
            <div className="form-container">
                <div className="form-step" onClick={goBackHandler}>
                    <Circle currentStep={currentStep} step={step} title={title}/>
                </div>
                {children}
            </div>
        </section>
    );
};

export default MainContainer;