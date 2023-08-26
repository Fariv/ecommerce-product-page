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

let cartDropdownMenu = '';
const TopBar = () => {

    const { qtyInCart } = useContext(AddToCartContext);
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

    return (
        <TopBarStyled>
            <TopBarLeftSideStyled>
                <Logo url={"#"}>sneakers</Logo>
                <Menus />
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
