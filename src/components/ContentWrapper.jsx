import React from 'react'
import ContentWrapperStyled from './styled/ContentWrapperStyled'
import ProductImages from './ProductImages'
import ProductDetails from './ProductDetails'

export default () => {
    return (
        <ContentWrapperStyled>
            <ProductImages />
            <ProductDetails />
        </ContentWrapperStyled>
    )
}
