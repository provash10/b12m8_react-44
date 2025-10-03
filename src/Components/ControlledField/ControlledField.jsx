import React, { useState } from 'react';

const ControlledField = () => {
    const [name,setName] = useState('');
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('secret')
    const [error, setError] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log("Submitted") //checked
        console.log("name, email, password")

        if(password.length <6){
            setError('Password Must Be 6 Characters or Longer')
        }
        else{
            setError('');
        }
    }

    const handleNameChange = (e) =>{
        setName(e.target.value);
    }
    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
        setPassword(e.target.value);
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
                <input type="text" onChange={handleNameChange} defaultValue={name} placeholder='Your Name'/>  <br />
                 <input type="email" onChange={handleEmailChange} defaultValue={email} name="email" id="" placeholder='Your Email' required/> <br />
                 {/* <input type="password" name="password" id="" placeholder='Password' value={password} required /> <br /> */}
                 <input onChange={handlePasswordOnChange} type="password" name="password" id="" placeholder='Password' defaultValue={password} required /> <br />
                 <input type="submit" value="Submit ControlledField" />
                 </form>

                 <p style={{color:'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ControlledField;