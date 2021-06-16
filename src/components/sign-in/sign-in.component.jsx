import React, {useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        console.log(event.target);
        setEmail('');
        setPassword('');
    };

    const handleChange = event => {
        const { value, name } = event.target;
        if (name === 'email')
            setEmail(value);
        else if (name === 'password')
        setPassword(value);
    };

    // const handleEmail = event => {
    //     const { value } = event.target;
        
    //     setEmail(value);
    // };
    // const handlePassword = event => {
    //     const { value } = event.target;
    //     setPassword(value);
    // };

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={ handleSubmit }>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={ handleChange }
                    value={ email }
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    handleChange={ handleChange }
                    value={ password }
                    label='password'
                    required
                />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;