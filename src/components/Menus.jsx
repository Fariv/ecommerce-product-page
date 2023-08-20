import React from 'react'
import { styled } from 'styled-components';

const MenuWrapperStyled = styled.ul`
    display: flex;
    list-style: none;
    color: hsl(219, 9%, 45%);
`;
const MenuStyled = styled.li`
    margin-left: 2.8rem;
    color: hsl(219, 9%, 45%);
`;

const MenuLinkStyled = styled.a`
    text-decoration: none;
    color: hsl(219, 9%, 45%);
    &:visited {
        color: hsl(219, 9%, 45%);
    }
`;

const Menus = () => {
    return (
        <MenuWrapperStyled>
            <MenuStyled><MenuLinkStyled href="#collections">Collections</MenuLinkStyled></MenuStyled>
            <MenuStyled><MenuLinkStyled href="#men">Men</MenuLinkStyled></MenuStyled>
            <MenuStyled><MenuLinkStyled href="#women">Women</MenuLinkStyled></MenuStyled>
            <MenuStyled><MenuLinkStyled href="#about">About</MenuLinkStyled></MenuStyled>
            <MenuStyled><MenuLinkStyled href="#xontact">Contact</MenuLinkStyled></MenuStyled>
        </MenuWrapperStyled>
    )
}

export default Menus;