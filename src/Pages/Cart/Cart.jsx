import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cart-item'
import './Cart.css'
import { useNavigate } from 'react-router-dom'


export const Cart = () => {
    const { cartItems, getTotalCartAmount, clearCart} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

  return (
    <div className="containerMax">
        <div className='cart container'>
            <div>
                <h1 className='empty'>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {
                    PRODUCTS.map((product) => {
                        if(cartItems[product.id] !== 0){
                            return <CartItem data={product}/>
                        }
                    })
                }
            </div>
            {totalAmount > 0 ? (
                <div className="checkout">
                    <p>Subtotal: ${totalAmount}</p>
                    <button onClick={() => navigate("/")}>Continue Shopping</button>
                    <button>Checkout</button>
                    <button onClick={clearCart}>Clear cart</button>
                </div>
            ): (
                <h1 className='empty'>Your Cart is Empty</h1>
            )
            }
        </div>
    </div>
  )
}
