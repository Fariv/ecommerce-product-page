import React from 'react'
import TopBarStyled from './styled/TopBarStyled';
import LogoStyled from './styled/LogoStyled';
import Menus from './Menus';
import TopBarLeftSideStyled from './styled/TopBarLeftSideStyled';

const TopBar = () => {
    return (
        <TopBarStyled>
            <TopBarLeftSideStyled>
                <LogoStyled>sneakers</LogoStyled>
                <Menus />
            </TopBarLeftSideStyled>
            <div>
                Logged in user
            </div>
        </TopBarStyled>
    );
}

export default TopBar;
