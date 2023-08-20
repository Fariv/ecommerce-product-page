import React from 'react'
import productImage1Thumb from "../assets/images/image-product-1-thumbnail.jpg";
import CartDropdownMenuStyled from './styled/CartDropdownMenuStyled';
import IconDelete from './styled/IconDeleteStyled';

const CartDropdownMenu = () => {
    return (
        <CartDropdownMenuStyled>
            <div className='header'>Cart</div>
            <div className='body'>
                <div className='column'>
                    <img className='product-image-thumb-1' src={productImage1Thumb} alt='productimagethumb1' width={42} />
                </div>
                <div className='column'>
                    <div>
                        Fall Limited Edition Sneakers
                    </div>
                    <div className='product-amount'>
                        <span>$125.00</span> x <span>3</span> <span className='product-total'>$375</span>
                    </div>
                </div>
                <IconDelete  className='column' />
            </div>
            <div className='footer'>
                <button type='button' className='btn'>Checkout</button>
            </div>
        </CartDropdownMenuStyled>
    );
}

export default CartDropdownMenu;