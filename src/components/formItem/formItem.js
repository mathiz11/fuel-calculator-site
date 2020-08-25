import React, { useState } from 'react';

const FormItem = ({ id, value, name, handleChange }) => {

    const [val, setVal] = useState(value);

    function send(valu, ev) {
        console.log(name);
        console.log(val)
        console.log(valu)
        console.log(ev)
    }
    return (
        <div className="form-group">
            <label>{name}</label>
            <input type="number" className="form-control" name={name} value={val} onChange={send} />
        </div>
    )
}

export default FormItem;