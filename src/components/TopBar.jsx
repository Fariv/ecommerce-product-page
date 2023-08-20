import React from 'react'
import TopBarStyled from './styled/TopBarStyled';
import Menus from './Menus';
import TopBarLeftSideStyled from './styled/TopBarLeftSideStyled';
import Logo from './Logo';

const TopBar = () => {
    return (
        <TopBarStyled>
            <TopBarLeftSideStyled>
                <Logo url={"#"}>sneakers</Logo>
                <Menus />
            </TopBarLeftSideStyled>
            <div>
                Logged in user
            </div>
        </TopBarStyled>
    );
}

export default TopBar;
