import React, {useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

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

            await createUserProfileDocument(user, { displayName });

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
        <div className='sign-up'>
            <h2>I don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={ handleSubmit }>
                <FormInput
                    name='displayName'
                    type='text'
                    handleChange={ handleChange }
                    value={ displayName }
                    label='Display Name'
                    required
                />
                <FormInput
                    name='email'
                    type='email'
                    handleChange={ handleChange }
                    value={ email }
                    label='Email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    handleChange={ handleChange }
                    value={ password }
                    label='Password'
                    required
                />
                <FormInput
                    name='confirmPassword'
                    type='password'
                    handleChange={ handleChange }
                    value={ confirmPassword }
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    );
};

export default SignUp;