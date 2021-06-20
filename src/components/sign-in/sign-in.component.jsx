import React, {useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setEmail('');
            setPassword('');
         } catch (error) {
            console.log(error);
        }

    };

    const handleChange = event => {
        const { value, name } = event.target;
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

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
                    <CustomButton type='submit'>SIGN IN</CustomButton>
                    <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Google Sign In</CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;