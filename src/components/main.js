import React from 'react'
import useSignUpForm from "./CustomHooks"
import axios from "axios"

const Form = () => {
    const signUp =()=>{
        axios.post(`http://localhost:5000/create`, inputs)
    }
    const { inputs, handleInputChange, handleSubmit, reset } = useSignUpForm(signUp)
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <input 
                onChange={handleInputChange}
                 type="text" name="firstName" 
                 value={inputs.firstName} 
                     required
                  />
                <label>Last Name</label>
                <input 
                onChange={handleInputChange}
                 type="text" name="lastName
                 " value={inputs.lastName} 
                 required />
            </div>
            <div>
                <label>Email Address</label>
                <input onChange={handleInputChange} type="email" name="email" value={inputs.email}   required />
            </div>
            <div>
                <label>Password</label>
                <input onChange={handleInputChange} type="password" value={inputs.password}  name="password" />
            </div>
            <div>
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default Form;
