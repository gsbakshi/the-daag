import React from 'react';

import CopyrightContact from '../copyright-contact/copyright-contact.component';

import {
    FooterContainer,
    QuicklinksContainer,
    LogoContainer,
    FooterLogo,
    OptionsContainer,
    OptionLink
} from './footer.styles';

const Footer = () => (
    <FooterContainer>
        <QuicklinksContainer>
            <LogoContainer to='/'>
                <FooterLogo />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'> CATEGORIES </OptionLink>
                <OptionLink to='#'> USEFUL LINKS </OptionLink>
            </OptionsContainer>
        </QuicklinksContainer>
        <CopyrightContact />
    </FooterContainer>
);

export default Footer;