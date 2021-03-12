import React from 'react';

const InputsForm = ({ title, fields, onInputValueChange }) => {

    const mappedFields = fields.map((f, i) => {
        return <div key={i} className="form-group mb-3">
            <label htmlFor={`${f.name}${i}`}>{f.name.charAt(0).toUpperCase() + f.name.slice(1)}</label>
            <input
                placeholder={f.name.charAt(0).toUpperCase() + f.name.slice(1)}
                id={`${f.name}${i}`}
                name={f.name}
                value={f.inputValue}
                className="form-control"
                onChange={onInputValueChange}
            ></input>
        </div>
    });

    return (
        <>
            <h3 className="mb-3">{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
            {mappedFields}
        </>
    )
}

export default InputsForm;
