import React, { useState } from 'react'
//  IN HERE I CREATE FUNCTIONS THAT I WILL EXPORT TO THE COMPONENT THAT REQUIRES TO UPDATE THE STATE


const useSignUpForm = (callback) => {
    const [inputs, setInputs] = useState([
        { firstName: "" }, { lastName: "" }, { email: "" }, { password: "" }
    ])


    // HANDLES SUBMIT EVENT
    const handleSubmit = (e) => {
        if (e) {
            e.preventDefault()
        }

        callback()

    }
    //HANDLES ON CHANGE EVENT

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }


    return {
        handleSubmit,
        handleInputChange,
        reset: () => setInputs(""),
        inputs,

    };
}

export default useSignUpForm;