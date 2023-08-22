import React from 'react'
import styled from 'styled-components';

const ProductImageStyled = styled.div`
    background: url("${props => props.image}") no-repeat;
    background-size: cover;
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.isrounded ? "12px": 0};
    cursor: pointer;
    &:focus > .transparent-layer,
    &:hover > .transparent-layer,
    &.active > .transparent-layer {
        background-color: rgba(255, 255, 255, 0.5);
        width: 100%;
        height: 100%;
        border-radius: ${props => props.isrounded ? "12px": 0};
    }
    &.active {
        border: 3px solid hsl(26, 100%, 55%);
        border-radius: ${props => props.isrounded ? "12px": 0};
    }
`;

const ProductImage = ({ image, width, height, isrounded, islayer, selectedimage }) => {
    
    let imageclassname = selectedimage === image ? 'active' : '';
    return (
        <ProductImageStyled className={imageclassname} image={image} width={width} height={height} isrounded={isrounded}>
            {islayer ? <div className='transparent-layer'></div> : null}
        </ProductImageStyled>
    );
}

export default ProductImage