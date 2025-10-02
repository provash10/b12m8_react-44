import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Form Submitted');
        console.log(e.target);
        console.log(e.target.name.value); // checked
        console.log(e.target.email.value); // checked
    }
    return (
        <div>
            <h3>Hello Simple Form</h3>
            <form onSubmit={handleSubmit} action="">
                <input type="text" name="name" placeholder='Your Name'/> <br />
                <input type="email" name="email" placeholder='Your Email'/> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;