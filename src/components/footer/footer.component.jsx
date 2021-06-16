import React from 'react';
import { Link } from 'react-router-dom';

// import { ReactComponent as Logo } from '../../assets/logo/vector/default-monochrome-white.svg';
import logo  from '../../assets/logo/cover.png';

import './footer.styles.scss';

const Footer = () => (
    <div className='footer'>
        <Link className='logo-container' to='/'>
            {/* <Logo className='logo' /> */ }
            <img src={ logo } alt="Logo" className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'> SHOP </Link>
            <Link className='option' to='/shop'> CONTACT </Link>
            {
                <Link className='option' to='/signin'> SIGN IN </Link>
            }
        </div>
    </div>
);

export default Footer;
