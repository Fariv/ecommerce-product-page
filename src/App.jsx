import { useState } from "react"
import Backdrop from "./components/Backdrop"
import PageContainer from "./components/PageContainer"
import PopupContext from "./contexts/PopupContext"

function App() {
    const [showBackdrop, setShowBackdrop] = useState(0);
    return (
        <>
            <PopupContext.Provider value={{
                    showBackdrop, 
                    setShowBackdrop,
                }}
            >
                <PageContainer />
                <Backdrop />
            </PopupContext.Provider>
        </>
    )
}

export default App
