import React from 'react'
import IconCart from "../assets/images/icon-cart.svg";
import { styled } from 'styled-components';

const ProductDetailsStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-top: 4.5rem;
    padding-left: 4.5rem;
`;

const SubtitleStyled = styled.div`
    color: hsl(26, 100%, 55%);
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 1px;
`;

const HeaderTextStyled = styled.h1`
    font-size: 46px;
    margin: 20px 0;
`;

const ParagraphStyled = styled.p`
    color: hsl(219, 9%, 45%);
    line-height: 1.6;
`;

const ProductDetails = () => {
    return (
        <ProductDetailsStyled>
            <SubtitleStyled>SNEAKER COMPANY</SubtitleStyled>
            <HeaderTextStyled>Fall Limited Edition Sneakers</HeaderTextStyled>
            <ParagraphStyled>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</ParagraphStyled>
            <div>
                <span>$125.00</span>
                <span className='badge'>50%</span>
            </div>
            <div>
                <span className='badge'>$250.00</span>
            </div>
            <div>
                <div>
                    <button type='button'>-</button>
                    <input type='text' />
                    <button type='button'>+</button>
                </div>
                <button type='button'>
                    <img src={IconCart} alt='icon-cart' />
                    <span>Add to cart</span>
                </button>
            </div>
        </ProductDetailsStyled>
    );
}

export default ProductDetails