import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('secret')


    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Submitted") //checked
    }

    const handlePasswordOnChange = (e)=>{
        console.log(e.target.value)
    }


    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                 <input type="email" name="email" id="" placeholder='Your Email' required/> <br />
                 {/* <input type="password" name="password" id="" placeholder='Password' value={password} required /> <br /> */}
                 <input onChange={handlePasswordOnChange} type="password" name="password" id="" placeholder='Password' defaultValue={password} required /> <br />
                 <input type="submit" value="Submit ControlledField" />
                 </form>
        </div>
    );
};

export default ControlledField;