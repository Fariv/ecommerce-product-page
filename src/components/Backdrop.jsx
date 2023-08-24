import React, { useContext } from 'react'
import BackdropStyled from './styled/BackdropStyled';
import PopupContext from '../contexts/PopupContext';

const Backdrop = () => {
    const {showBackdrop, setShowBackdrop, setPopupEl} = useContext(PopupContext);

    const closePopup = () => {
        if (showBackdrop) {
            setShowBackdrop(0);
            setPopupEl([]);
        } else {
            setShowBackdrop(1);
        }
    }
    return (
        <BackdropStyled show={showBackdrop} onClick={closePopup} />
    );
}

export default Backdrop