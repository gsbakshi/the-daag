import React, {useState} from 'react';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
    SignUpContainer,
    SignUpTitle
} from './sign-up.styles';

const SignUp = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();
        
        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, displayName);

            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = event => {
        const { value, name } = event.target;
        switch (name) {
            case 'displayName':
                return setDisplayName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            case 'confirmPassword':
                return setConfirmPassword(value);
            default:
                return;
        }
    };

    return (
        <SignUpContainer>
            <SignUpTitle>I don't have an account</SignUpTitle>
            <span>Sign up with your email and password</span>
            <form onSubmit={ handleSubmit }>
                <FormInput
                    name='displayName'
                    type='text'
                    handleChange={ handleChange }
                    value={ displayName }
                    label='display name'
                    required
                />
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
                <FormInput
                    name='confirmPassword'
                    type='password'
                    handleChange={ handleChange }
                    value={ confirmPassword }
                    label='confirm password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    );
};

export default SignUp;