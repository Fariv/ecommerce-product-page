import React from 'react'
import IconCart from "../assets/images/icon-cart.svg";
import { styled } from 'styled-components';

const ProductDetailsStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-top: 4rem;
`;
const ProductDetails = () => {
    return (
        <ProductDetailsStyled>
            <div>SNEAKER COMPANY</div>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
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