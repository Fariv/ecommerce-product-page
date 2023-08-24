import { useContext } from "react";
import { styled } from "styled-components";
import PopupContext from "../contexts/PopupContext";

const PopupContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const PopupDialog = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

const PopupHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .close {
        color: hsl(26, 100%, 55%);
        font-size: 2.8rem;
        cursor: pointer;
    }
`;

const PopupBody = styled.div`
    display: flex;
    flex-direction: column;
`;

const PopupFooter = styled.div`
    display: flex;
    flex-direction: column;
`;

const Popup = ({children, title}) => {
    const {setShowBackdrop, setPopupEl} = useContext(PopupContext);
    return (
        <PopupContainer>
            <PopupDialog>
                <PopupHeader>
                    {title ? title : <div></div>}
                    <span 
                        className="close" 
                        onClick={
                            () => {
                                setPopupEl([]);
                                setShowBackdrop(0);
                            }
                        }
                    >&times;</span>
                </PopupHeader>
                <PopupBody>{children}</PopupBody>
                <PopupFooter></PopupFooter>
            </PopupDialog>
        </PopupContainer>
    );
}

export default Popup