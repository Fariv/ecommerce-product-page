import React, { useContext } from 'react'
import ProductImage from './ProductImage';
import OtherImages from './OtherImages';
import { styled } from 'styled-components';
import PopupContext from '../contexts/PopupContext';

const ProductImagesStyled = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
    @media (max-width: 841px) {
        width: 100%;
    }
`;

const ProductImages = ({images, selectedImage}) => {

    const {showBackdrop, setShowBackdrop, popupEl, setPopupEl} = useContext(PopupContext);
    return (
        <ProductImagesStyled>
            <div>
                <ProductImage 
                    image={selectedImage} 
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
                    selectedimage={selectedImage} 
                />
            </div>
        </ProductImagesStyled>
    );
}

export default ProductImages