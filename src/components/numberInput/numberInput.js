import React from 'react';
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";

import './numberInput.scss';

const NumberInput = ({ title, value, plus, minus }) => {
    return (
        <div className="number-input">
            <h2>{title}</h2>
            <div className="d-flex justify-content-between px-4">
                <BsDashCircle className="my-auto" onClick={minus} />
                <span>{value}</span>
                <BsPlusCircle className="my-auto" onClick={plus} />
            </div>
        </div>
    )
}

export default NumberInput;