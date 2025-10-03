import React, { useRef } from 'react';

const UnControlledField = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('Submitted');
        // console.log(emailRef);
        console.log(emailRef.current.value);
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email,password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="" /> <br/>
                <input ref={passwordRef} type="password" name="" /> <br/>
                <input type="submit" value="Submit" /> <br/>
            </form>
        </div>
    );
};

export default UnControlledField;