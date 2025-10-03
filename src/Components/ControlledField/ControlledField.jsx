import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('secret')
    const [error, setError] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log("Submitted") //checked
        if(password.length <6){
            setError('Password Must Be 6 Characters or Longer')
        }
        else{
            setError('');
        }
    }

    const handlePasswordOnChange = (e)=>{
        // console.log(e.target.value);
        setPassword(e.target.value);

        // if(password.length <6){
        //     setError('Password Must Be 6 Characters or Longer')
        // }
        // else{
        //     setError('');
        // }
    }


    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                 <input type="email" name="email" id="" placeholder='Your Email' required/> <br />
                 {/* <input type="password" name="password" id="" placeholder='Password' value={password} required /> <br /> */}
                 <input onChange={handlePasswordOnChange} type="password" name="password" id="" placeholder='Password' defaultValue={password} required /> <br />
                 <input type="submit" value="Submit ControlledField" />
                 </form>

                 <p style={{color:'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ControlledField;