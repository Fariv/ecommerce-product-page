import React, { useContext, useState } from 'react'
import ProductImage from './ProductImage';
import OtherImages from './OtherImages';
import { styled } from 'styled-components';
import PopupContext from '../contexts/PopupContext';
import useWindowDimensions from '../hooks/useWindowDimensions';
import filenameparser from '../helpers/file';
import { LeftArrowStyled, RightArrowStyled } from './styled/ProductImageStyled';

const ProductImagesStyled = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
    @media (max-width: 841px) {
        width: 100%;
        > .productimageswrapper {
            width: 100%;
        }
    }
`;

const ProductImages = ({images, selectedImage}) => {

    const { width } = useWindowDimensions();
    const [productImageEl, setProductImageEl] = useState([
        [
            <div key={Math.random(40)} style={{position: 'relative', width: '100%'}}>
                <ProductImage 
                    image={selectedImage} 
                    width="500px" 
                    height="500px" 
                    isrounded={0}
                />
                <LeftArrowStyled onClick={() => shuffleImage(images, selectedImage, 'prev')}>
                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                </LeftArrowStyled>
                <RightArrowStyled onClick={() => shuffleImage(images, selectedImage, 'next')}>
                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                </RightArrowStyled>
            </div>
        ]
    ]);
    const {showBackdrop, setShowBackdrop, popupEl, setPopupEl} = useContext(PopupContext);
    const shuffleImage = (imagesarray, productimage, direction) => {
        
        const { filename, extension, basename } = filenameparser(productimage);
        const rawfilename = basename + '-thumbnail.' + extension;
        const selectedthumbnail = productimage.replace(filename, rawfilename);

        let shuffledImage = null;
        imagesarray.forEach(function(img, i) {
            if (img === selectedthumbnail) {

                if (direction==="next") {
                    if (i+1 === imagesarray.length) {
    
                        shuffledImage = imagesarray[0]
                    } else {
    
                        shuffledImage = imagesarray[i+1]
                    }
                } else if (direction==="prev") {
                     
                    if (i === 0) {
    
                        shuffledImage = imagesarray[imagesarray.length-1]
                    } else {
    
                        shuffledImage = imagesarray[i-1]
                    }
                }
                shuffledImage = shuffledImage.replace('-thumbnail', '');
                setProductImageEl([
                    <div key={Math.random(45)} style={{position: 'relative', width: '100%'}}>
                        <ProductImage 
                            image={shuffledImage} 
                            width="500px" 
                            height="500px" 
                            isrounded={0}
                        />
                        <LeftArrowStyled onClick={() => shuffleImage(images, shuffledImage, 'prev')}>
                            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                        </LeftArrowStyled>
                        <RightArrowStyled onClick={() => shuffleImage(images, shuffledImage, 'next')}>
                            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                        </RightArrowStyled>
                    </div>
                ]);
            }
        });
    }

    return (
        <ProductImagesStyled>
            <div className='productimageswrapper'>
                {width > 841 ?
                (<><ProductImage 
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
                /></>) : productImageEl}
            </div>
        </ProductImagesStyled>
    );
}

export default ProductImages