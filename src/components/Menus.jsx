import React from 'react'
import { styled } from 'styled-components';

const MenuWrapperStyled = styled.ul`
    display: flex;
    list-style: none;
    color: hsl(219, 9%, 45%);
    padding: 0;
    margin: 0;
    @media (max-width: 841px) {
        flex-direction: column;
        position: fixed;
        height: 100%;
        width: 300px;
        top: 0;
        left: ${prop => prop.open ? '0' : '-300px'};
        transition: left 0.5s ease-in-out;
        z-index: 3;
        background: #fff;
        padding: 1.5rem 0 0 1.5rem;
    }
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
    &.close-menu {
        display: none;
    }
    @media (max-width: 841px) {
        margin: 0;
        padding: 0 0 1rem 0;
        font-weight: 700;
        border-bottom: 4px solid transparent;
        &.close-menu {
            display: block;
            font-size: 26px;
            font-weight: 700;
            padding: 0 0 2rem 0;
        }
        &:focus,
        &:active,
        &:hover {
            border-bottom: 4px solid transparent;
        }
    }
    
`;

const MenuLinkStyled = styled.a`
    text-decoration: none;
    color: hsl(219, 9%, 45%);
    &:visited {
        color: hsl(219, 9%, 45%);
    }
    @media (max-width: 841px) {
        color: hsl(220, 13%, 13%);
        &:visited {
            color: hsl(220, 13%, 13%);
        }
        &.close-menu-link:visited,
        &.close-menu-link {
            color: hsl(219, 9%, 45%);
        }
    }
`;

const Menus = ({open, closeMenu}) => {

    return (
        <MenuWrapperStyled open={open}>
            <MenuStyled className='close-menu'><MenuLinkStyled href="#" className='close-menu-link' onClick={closeMenu} >&times;</MenuLinkStyled></MenuStyled>
            <MenuStyled><MenuLinkStyled href="#collections">Collections</MenuLinkStyled></MenuStyled>
            <MenuStyled><MenuLinkStyled href="#men">Men</MenuLinkStyled></MenuStyled>
            <MenuStyled><MenuLinkStyled href="#women">Women</MenuLinkStyled></MenuStyled>
            <MenuStyled><MenuLinkStyled href="#about">About</MenuLinkStyled></MenuStyled>
            <MenuStyled><MenuLinkStyled href="#xontact">Contact</MenuLinkStyled></MenuStyled>
        </MenuWrapperStyled>
    )
}

export default Menus;