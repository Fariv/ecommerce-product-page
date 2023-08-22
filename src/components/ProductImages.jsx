import React from 'react'
import ProductImage from './ProductImage';
import OtherImages from './OtherImages';
import ProductImage1 from '../assets/images/image-product-1.jpg';
import ProductImageThumb1 from '../assets/images/image-product-1-thumbnail.jpg';
import ProductImageThumb2 from '../assets/images/image-product-2-thumbnail.jpg';
import ProductImageThumb3 from '../assets/images/image-product-3-thumbnail.jpg';
import ProductImageThumb4 from '../assets/images/image-product-4-thumbnail.jpg';
import { styled } from 'styled-components';

const ProductImagesStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProductImages = () => {

    const images = [
        ProductImageThumb1,
        ProductImageThumb2,
        ProductImageThumb3,
        ProductImageThumb4,
    ];
    return (
        <ProductImagesStyled>
            <ProductImage image={ProductImage1} width="500px" height="500px" isrounded={true} />
            <OtherImages images={images} />
        </ProductImagesStyled>
    );
}

export default ProductImages