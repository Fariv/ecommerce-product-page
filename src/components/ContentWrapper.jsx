import React, { useState } from 'react'
import ContentWrapperStyled from './styled/ContentWrapperStyled'
import ProductImages from './ProductImages'
import ProductDetails from './ProductDetails'
import selectedImage from '../assets/images/image-product-1.jpg';
import ProductImageThumb1 from '../assets/images/image-product-1-thumbnail.jpg';
import ProductImageThumb2 from '../assets/images/image-product-2-thumbnail.jpg';
import ProductImageThumb3 from '../assets/images/image-product-3-thumbnail.jpg';
import ProductImageThumb4 from '../assets/images/image-product-4-thumbnail.jpg';
import MainProductImageContext from "../contexts/MainProductImageContext";


export default () => {

    const images = [
        ProductImageThumb1,
        ProductImageThumb2,
        ProductImageThumb3,
        ProductImageThumb4,
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
