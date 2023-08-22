import React from 'react'
import { styled } from 'styled-components';

const MenuWrapperStyled = styled.ul`
    display: flex;
    list-style: none;
    color: hsl(219, 9%, 45%);
    padding: 0;
    margin: 0;
`;
const MenuStyled = styled.li`
    margin: 0 0 0 2.8rem;
    color: hsl(219, 9%, 45%);
    padding: 2.8rem 0 2.5rem 0;
    border-bottom: 4px solid transparent;
    &:focus,
    &:active,
    &:hover {
        border-bottom: 4px solid hsl(26, 100%, 55%);
        color: #000;
    }
    &:hover > a {
        color: #000;
    }
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