import React from 'react';
const PrimaryButton = ({children, mod}) => {
    const modificator = mod !== undefined ? mod : "";
    return (
        <button className={`btn ${modificator}`}>{children}</button>
    );
};

export default PrimaryButton;