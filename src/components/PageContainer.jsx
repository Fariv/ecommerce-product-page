import React, { useState } from 'react'
import TopBar from './TopBar';
import ContentWrapper from './ContentWrapper';
import Footer from './Footer';
import PageContainerStyled from './styled/PageContainerStyled';
import AddToCartContext from '../contexts/AddToCartContext';

export default () => {
    const [qtyInCart, setQtyInCart] = useState();
    const [priceInCart, setPriceInCart] = useState();
    return (
        <PageContainerStyled>
            <AddToCartContext.Provider value={{
                    qtyInCart,
                    setQtyInCart,
                    priceInCart,
                    setPriceInCart,
                }}
            >    
                <TopBar />
                <ContentWrapper />
            </AddToCartContext.Provider>
            <Footer />
        </PageContainerStyled>
    );
}
