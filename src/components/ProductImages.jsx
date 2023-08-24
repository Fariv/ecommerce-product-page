import React, { useContext } from 'react'
import ProductImage from './ProductImage';
import OtherImages from './OtherImages';
import ProductImage1 from '../assets/images/image-product-1.jpg';
import ProductImageThumb1 from '../assets/images/image-product-1-thumbnail.jpg';
import ProductImageThumb2 from '../assets/images/image-product-2-thumbnail.jpg';
import ProductImageThumb3 from '../assets/images/image-product-3-thumbnail.jpg';
import ProductImageThumb4 from '../assets/images/image-product-4-thumbnail.jpg';
import { styled } from 'styled-components';
import PopupContext from '../contexts/PopupContext';

const ProductImagesStyled = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
`;

const ProductImages = () => {

    const {showBackdrop, setShowBackdrop, popupEl, setPopupEl} = useContext(PopupContext);
    const images = [
        ProductImageThumb1,
        ProductImageThumb2,
        ProductImageThumb3,
        ProductImageThumb4,
    ];
    return (
        <ProductImagesStyled>
            <div>
                <ProductImage 
                    image={ProductImage1} 
                    images={images} 
                    width="450px" 
                    height="450px" 
                    isrounded={1} 
                    showBackdrop={showBackdrop} 
                    setShowBackdrop={setShowBackdrop} 
                    popupEl={popupEl} 
                    setPopupEl={setPopupEl} 
                />
                <OtherImages 
                    images={images} 
                    selectedimage={ProductImage1} 
                />
            </div>
        </ProductImagesStyled>
    );
}

export default ProductImages