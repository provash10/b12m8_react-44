import React from 'react';
import UseInputField from '../Hooks/UseInputField';

const HookForm = () => {

    const [name,nameOnChange] = UseInputField();
    const [email, emailOnChange] = UseInputField();
    const [password, passwordOnChange] = UseInputField();


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Submit, name, email"); wrong process
        console.log("Submit:", name, email,password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input defaultValue={name} type="text" onChange={nameOnChange} placeholder='Your Name'/> <br />
                <input type="email" onChange={emailOnChange} name="" id="" placeholder='Your Email'/> <br />
                <input type="password" name="" onChange={passwordOnChange} placeholder='Your Password'/> <br />
                <input type="submit" value="Submit" />
            </form>
            

        </div>
    );
};

export default HookForm;