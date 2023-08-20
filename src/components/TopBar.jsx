import React from 'react'
import TopBarStyled from './styled/TopBarStyled';
import Menus from './Menus';
import TopBarLeftSideStyled from './styled/TopBarLeftSideStyled';
import Logo from './Logo';
import TopBarRightSideStyled from './styled/TopBarRightSideStyled';
import IconCart from '../assets/images/icon-cart.svg';
import AvatarImage from '../assets/images/image-avatar.png';

const TopBar = () => {
    return (
        <TopBarStyled>
            <TopBarLeftSideStyled>
                <Logo url={"#"}>sneakers</Logo>
                <Menus />
            </TopBarLeftSideStyled>
            <TopBarRightSideStyled>
                <div>
                    <img src={ IconCart } alt='cart' width="22" />
                </div>
                <div>
                    <img src={ AvatarImage } alt='cart' width="50" />
                </div>
            </TopBarRightSideStyled>
        </TopBarStyled>
    );
}

export default TopBar;
