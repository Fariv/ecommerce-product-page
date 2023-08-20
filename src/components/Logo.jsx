import React from 'react'
import LogoStyled from './styled/LogoStyled';
import { styled } from 'styled-components';

const LogoLink = styled.a`
    text-decoration: none;
    color: #000;
`;

const Logo = ({url, children}) => {
    return (
        <LogoStyled>
            <LogoLink href={url}>{children}</LogoLink>
        </LogoStyled>
    );
}

export default Logo