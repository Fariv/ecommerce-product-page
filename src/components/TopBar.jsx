import React, { useContext, useState } from 'react'
import TopBarStyled from './styled/TopBarStyled';
import Menus from './Menus';
import TopBarLeftSideStyled from './styled/TopBarLeftSideStyled';
import Logo from './Logo';
import TopBarRightSideStyled from './styled/TopBarRightSideStyled';
import IconCart from '../assets/images/icon-cart.svg';
import AvatarImage from '../assets/images/image-avatar.png';
import CartIconWrapperStyled from './styled/CartIconWrapperStyled';
import CartDropdownMenu from './CartDropdownMenu';
import BadgeStyled from './styled/BadgeStyled';
import AddToCartContext from '../contexts/AddToCartContext';
import useWindowDimensions from '../hooks/useWindowDimensions';
import IconMenu from "../assets/images/icon-menu.svg";
import PopupContext from '../contexts/PopupContext';

let cartDropdownMenu = '';
const TopBar = () => {

    const { width } = useWindowDimensions();
    const { qtyInCart } = useContext(AddToCartContext);
    const { setShowBackdrop, isSideMenuOpened, setIsSideMenuOpened } = useContext(PopupContext);
    const [isOpened, setIsOpened] = useState(0);
    const showHideCartDropdownMenu = () => {
        if (!isOpened) {

            cartDropdownMenu = <CartDropdownMenu />
            setIsOpened(1);
        } else {

            cartDropdownMenu = '';
            setIsOpened(0);
        }
    }

    const showSideMenu = () => {
        if (!isSideMenuOpened) {

            setIsSideMenuOpened(1);
            setShowBackdrop(1)
        } else {

            setIsSideMenuOpened(0);
            setShowBackdrop(0)
        }
    }

    const closeMenu = (e) => {
        e.preventDefault();
        setIsSideMenuOpened(0);
        setShowBackdrop(0)
    }

    return (
        <TopBarStyled>
            <TopBarLeftSideStyled>
                {width < 842 ? (
                    <img src={IconMenu} alt='icon-menu' style={{
                        margin: '1.2rem 0 1.2rem 0.8rem',
                        padding: '0.8rem 0.8rem 0.8rem 0.8rem',
                        cursor: 'pointer',
                    }} onClick={showSideMenu} />
                ) : null}
                <Logo url={"#"}>sneakers</Logo>
                <Menus open={isSideMenuOpened} closeMenu={closeMenu} />
            </TopBarLeftSideStyled>
            <TopBarRightSideStyled>
                <CartIconWrapperStyled onClick={showHideCartDropdownMenu}>
                    <img src={ IconCart } alt='cart' width="22" />
                    {isNaN(qtyInCart) || qtyInCart <= 0 ? null : (<BadgeStyled>1</BadgeStyled>)}
                </CartIconWrapperStyled>
                <div>
                    <img src={ AvatarImage } alt='avatar' width="50" />
                </div>
            </TopBarRightSideStyled>
            {cartDropdownMenu}
        </TopBarStyled>
    );
}

export default TopBar;
