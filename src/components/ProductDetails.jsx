import React from 'react'
import IconCart from "../assets/images/icon-cart.svg";
import { css, styled } from 'styled-components';

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

const PriceTagStyled = styled.span`
    font-size: 28px;
    font-weight: 700;
    margin-right: 1rem;
`;

const OriginalPriceTagWrapperStyled = styled.div`
    font-weight: 700;
    margin-top: 0.9rem;
    color: hsl(220, 14%, 75%);
    text-decoration-line: strikethrough;
    text-decoration-thickness: 2px;
`;

const DiscountBadge = styled.span`
    font-weight: 700;
    background-color: hsl(25, 100%, 94%);
    color: hsl(26, 100%, 55%);
    padding: 3px 10px;
    border-radius: 5px;
`;

const ProductAddToCartRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2.5rem;
`;

const PaddingStyle = css`
    padding: 5px 15px;
`;

const ButtonStyle = css`
    color: hsl(26, 100%, 55%);
    background-color: hsl(223, 64%, 98%);
    outline: none;
    border: 1px solid hsl(223, 64%, 98%);
    cursor: pointer;
`;

const DecrementalButton = styled.button`
    ${ButtonStyle}
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    font-size: 35px;
    font-weight: 700;
    ${PaddingStyle}
`;

const IncrementalButton = styled.button`
    ${ButtonStyle}
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    font-size: 35px;
    font-weight: 700;
    ${PaddingStyle}
`;

const QtyInputStyled = styled.input`
    background-color: hsl(223, 64%, 98%);
    outline: none;
    border: none;
    color: hsl(220, 13%, 13%);
    font-size: 16px;
    font-weight: 700;
    width: 73px;
    padding: 25px 2px 11px 2px;
    text-align: center;
`;

const AddToCartBtnStyled = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    ${ButtonStyle}
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
    ${PaddingStyle}
    color: hsl(223, 64%, 98%);
    width: 285px;
    background-color: hsl(26, 100%, 55%);
    box-shadow: 1px 6px 30px -8px hsl(26, 100%, 55%);
    border: 1px solid hsl(26, 100%, 55%);
    > svg {
        margin-right: 20px;
    }
`;


const ProductDetails = () => {
    return (
        <ProductDetailsStyled>
            <SubtitleStyled>SNEAKER COMPANY</SubtitleStyled>
            <HeaderTextStyled>Fall Limited Edition Sneakers</HeaderTextStyled>
            <ParagraphStyled>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</ParagraphStyled>
            <div>
                <PriceTagStyled>$125.00</PriceTagStyled>
                <DiscountBadge>50%</DiscountBadge>
            </div>
            <OriginalPriceTagWrapperStyled>
                <span>$250.00</span>
            </OriginalPriceTagWrapperStyled>
            <ProductAddToCartRow>
                <div>
                    <DecrementalButton type='button'>-</DecrementalButton>
                    <QtyInputStyled type='text' />
                    <IncrementalButton type='button'>+</IncrementalButton>
                </div>
                <AddToCartBtnStyled type='button'>
                    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fill-rule="nonzero"/></svg>
                    <span>Add to cart</span>
                </AddToCartBtnStyled>
            </ProductAddToCartRow>
        </ProductDetailsStyled>
    );
}

export default ProductDetails