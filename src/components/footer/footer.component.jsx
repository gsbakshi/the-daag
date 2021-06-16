import React from 'react';
import { Link } from 'react-router-dom';

import CopyrightContact from '../copyright-contact/copyright-contact.component';

import { ReactComponent as Logo } from '../../assets/logo/vector/default-monochrome-white.svg';

import './footer.styles.scss';

const Footer = () => (
    <div className='footer'>
        <div className='quicklinks'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'> CATEGORIES </Link>
                <Link className='option' to='#'> USEFUL LINKS </Link>
            </div>
        </div>
        <CopyrightContact />
    </div>
);

export default Footer;