import React, { useState } from 'react'
import ContentWrapperStyled from './styled/ContentWrapperStyled'
import ProductImages from './ProductImages'
import ProductDetails from './ProductDetails'
import MainProductImageContext from "../contexts/MainProductImageContext";


export default () => {

    const selectedImage = 'images/image-product-1.jpg';
    const images = [
        'images/image-product-1-thumbnail.jpg',
        'images/image-product-2-thumbnail.jpg',
        'images/image-product-3-thumbnail.jpg',
        'images/image-product-4-thumbnail.jpg',
    ];

    const [productImagesEl, setProductImagesEl] = useState([
        <ProductImages key={Math.random(60)} images={images} selectedImage={selectedImage} />
    ]);

    return (
        <ContentWrapperStyled>
            <MainProductImageContext.Provider value={{
                    productImagesEl,
                    setProductImagesEl,
                }}
            >
                {productImagesEl}
            </MainProductImageContext.Provider>
            <ProductDetails />
        </ContentWrapperStyled>
    )
}
