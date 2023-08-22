import React from 'react'
import styled from 'styled-components';

const ProductImageStyled = styled.div`
    background: url("${props => props.image}") no-repeat;
    background-size: cover;
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.isrounded ? "12px": 0};
`;

const ProductImage = ({ image, width, height, isrounded }) => {
    return (
        <ProductImageStyled image={image} width={width} height={height} isrounded={isrounded} />
    );
}

export default ProductImage