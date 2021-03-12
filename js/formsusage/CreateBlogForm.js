import React, { useState } from 'react';
import InputsForm from '../forms/InputsForm';

const CreateBlogForm = () => {
    const initialValues = {
        name: "",
        title: "",
        subject: "",
        tages: "",
    }

    const [inputValues, setInputValues] = useState(initialValues);

    // some sample fields
    const fields = [
        {
            name: "name", // this will be the inputs name value
            label: "name",
            inputValue: inputValues.name, // since we are using e.target.name as key
        },
        {
            name: "title",
            label: "title",
            inputValue: inputValues.title,
        },
        {
            name: "subject",
            label: "subject",
            inputValue: inputValues.subject,
        },
        {
            name: "tags",
            label: "label for tags",
            inputValue: inputValues.tags,
        },
    ];

    const handleInputValueChange = (e) => {
        e.preventDefault();
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmitClick = () => {
        console.log(inputValues);
    }

    return (
        <div>
            <div className="col-6">
                <InputsForm title="create blog" fields={fields} onInputValueChange={handleInputValueChange} />
            </div>
            <p>{inputValues.name}</p>
            <p>{inputValues.title}</p>
            <p>{inputValues.subject}</p>
            <p>{inputValues.tags}</p>
            <button className="btn btn-primary" onClick={handleSubmitClick}>SUBMIT</button>
        </div>
    );
}

export default CreateBlogForm;
