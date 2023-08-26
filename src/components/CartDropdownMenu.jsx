import React, { useContext } from 'react'
import productImage1Thumb from "../assets/images/image-product-1-thumbnail.jpg";
import CartDropdownMenuStyled from './styled/CartDropdownMenuStyled';
import IconDelete from './styled/IconDeleteStyled';
import AddToCartContext from '../contexts/AddToCartContext';

const CartDropdownMenu = () => {
    const { qtyInCart, priceInCart, setQtyInCart, setPriceInCart } = useContext(AddToCartContext);

    const removeFromCart = (e) => {
        console.log(e)
        setQtyInCart(0);
        setPriceInCart(0);
    }

    return (
        <CartDropdownMenuStyled>
            <div className='header'>Cart</div>
            {(isNaN(qtyInCart) || qtyInCart <= 0) ? (<div className='body'><div className='empty'>You cart is empty</div></div>) : 
            (<><div className='body'>
                <div className='column'>
                    <img className='product-image-thumb-1' src={productImage1Thumb} alt='productimagethumb1' width={42} />
                </div>
                <div className='column'>
                    <div>
                        Fall Limited Edition Sneakers
                    </div>
                    <div className='product-amount'>
                        <span>${priceInCart}</span> x <span>{qtyInCart}</span> <span className='product-total'>${priceInCart * qtyInCart}</span>
                    </div>
                </div>
                <IconDelete  className='column' onClick={removeFromCart} />
            </div>
            <div className='footer'>
                <button type='button' className='btn'>Checkout</button>
            </div></>)}
        </CartDropdownMenuStyled>
    );
}

export default CartDropdownMenu;