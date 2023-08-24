import { useState } from "react"
import Backdrop from "./components/Backdrop"
import PageContainer from "./components/PageContainer"
import PopupContext from "./contexts/PopupContext"

function App() {
    const [showBackdrop, setShowBackdrop] = useState(0);
    const [popupEl, setPopupEl] = useState([]);
    return (
        <>
            <PopupContext.Provider value={{
                    showBackdrop, 
                    setShowBackdrop,
                    popupEl, 
                    setPopupEl,
                }}
            >
                <PageContainer />
                <Backdrop />
                {popupEl}
            </PopupContext.Provider>
        </>
    )
}

export default App
