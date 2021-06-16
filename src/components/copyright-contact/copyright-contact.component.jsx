import React from 'react';

import { ReactComponent as LinkedInLogo } from '../../assets/linkedin.svg';
import { ReactComponent as GithubLogo } from '../../assets/github.svg';

import './copyright-contact.styles.scss';

const CopyrightContact = () => (

    <div className='copyright-contact'>
        <div className='icon-container'>
            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/gsbakshi/'>
                <LinkedInLogo className='icon' />
            </a>
            <a target="_blank" rel="noreferrer" href='https://github.com/gsbakshi/'>
                <GithubLogo className='icon' />
            </a>
        </div>
        <a href="mailTo:greaser.bakshi@gmail.com">
            <p>greaser.bakshi@gmail.com</p>
        </a>
        <p>&#169; Gurmehar Bakshi 2021</p>
        <p className='disclaimer'>
            All product names, logos, and brands are property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, logos, and brands does not imply endorsement
        </p>
    </div>
);

export default CopyrightContact;