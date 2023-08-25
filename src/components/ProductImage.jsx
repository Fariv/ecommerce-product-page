import {styled, css} from 'styled-components';
import Popup from './Popup';
import OtherImages from './OtherImages';
import filenameparser from '../helpers/file';

const ProductImageStyled = styled.div`
    background: url("${props => props.image}") no-repeat;
    background-size: cover;
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.isrounded ? "12px" : 0};
    cursor: pointer;
    &:focus > .transparent-layer,
    &:hover > .transparent-layer,
    &.active > .transparent-layer {
        background-color: rgba(255, 255, 255, 0.5);
        width: 100%;
        height: 100%;
        border-radius: ${props => props.isrounded ? "12px" : 0};
    }
    &.active {
        border: 3px solid hsl(26, 100%, 55%);
        border-radius: ${props => props.isrounded ? "12px" : 0};
    }
`;

const sharedIconStyle = css`
    background-color: hsl(0, 0%, 100%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 72px);
    cursor: pointer;
    > svg {
        stroke: hsl(0, 0%, 0%);
    }
`;

const LeftArrowStyled = styled.div`
    left: -25px;
    > svg {
        margin: 15px 17px;
    }
    ${sharedIconStyle}
`;

const RightArrowStyled = styled.div`
    right: -27px;
    > svg {
        margin: 15px 19px;
    }
    ${sharedIconStyle}
`;

const ProductImage = ({ image, images, width, height, isrounded, islayer, selectedimage, showBackdrop, setShowBackdrop, setPopupEl }) => {

    let imageclassname = selectedimage === image ? 'active' : '';

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
                setPopupEl([
                    <Popup key={Math.random(50)}>
                        <ProductImage 
                            image={shuffledImage} 
                            width="500px" 
                            height="500px" 
                            isrounded={1}
                        />
                        <OtherImages 
                            images={images} 
                            selectedimage={shuffledImage} 
                        />
                        <LeftArrowStyled onClick={() => shuffleImage(images, shuffledImage, 'prev')}>
                            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                        </LeftArrowStyled>
                        <RightArrowStyled onClick={() => shuffleImage(images, shuffledImage, 'next')}>
                            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                        </RightArrowStyled>
                    </Popup>
                ]);
            }
        });
    }

    const showPopup = () => {
        if (setShowBackdrop) {

            if (showBackdrop) {
                setShowBackdrop(0);
                setPopupEl([]);
            } else {
                setShowBackdrop(1);
                setPopupEl([
                    <Popup key={Math.random(50)}>
                        <ProductImage 
                            image={image} 
                            width="500px" 
                            height="500px" 
                            isrounded={1}
                        />
                        <OtherImages 
                            images={images} 
                            selectedimage={image} 
                        />
                        <LeftArrowStyled onClick={() => shuffleImage(images, image, 'prev')}>
                            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                        </LeftArrowStyled>
                        <RightArrowStyled onClick={() => shuffleImage(images, image, 'next')}>
                            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                        </RightArrowStyled>
                    </Popup>
                ])
            }
        }
    }

    return (
        <ProductImageStyled onClick={showPopup} className={imageclassname} image={image} width={width} height={height} isrounded={isrounded}>
            {islayer ? <div className='transparent-layer'></div> : null}
        </ProductImageStyled>
    );
}

export default ProductImage