import React, {useState} from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
    SignInContainer,
    SignInTitle,
    ButtonBarContainer
} from './sign-in.styles';

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
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
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
                <ButtonBarContainer>
                    <CustomButton type='submit'>SIGN IN</CustomButton>
                    <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Google Sign In</CustomButton>
                </ButtonBarContainer>
            </form>
        </SignInContainer>
    );
};

export default SignIn;