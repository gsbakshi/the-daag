import React from 'react';

import { ReactComponent as LinkedInLogo } from '../../assets/linkedin.svg';
import { ReactComponent as GithubLogo } from '../../assets/github.svg';

import {
    CopyrightContactContainer,
    IconContainer,
    DisclaimerContainer
} from './copyright-contact.styles';

const CopyrightContact = () => (

    <CopyrightContactContainer>
        <IconContainer>
            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/gsbakshi/'>
                <LinkedInLogo className='icon' />
            </a>
            <a target="_blank" rel="noreferrer" href='https://github.com/gsbakshi/'>
                <GithubLogo className='icon' />
            </a>
        </IconContainer>
        <a href="mailTo:greaser.bakshi@gmail.com">
            <p>greaser.bakshi@gmail.com</p>
        </a>
        <p>&#169; Gurmehar Bakshi 2021</p>
        <DisclaimerContainer>
            All product names, logos, and brands are property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, logos, and brands does not imply endorsement.
        </DisclaimerContainer>
    </CopyrightContactContainer>
);

export default CopyrightContact;