import React, { useContext, useState } from 'react'
import { ShopContext } from '../../context/shop-context';
import { ShoppingCartSimple } from 'phosphor-react';
import { Eye } from 'phosphor-react'

export const Product = (props) => {
    const { id, productName, price, productImage, desc} = props.data;

    const { addToCart, cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    // estado para controlar a exibição do modal
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
    console.log('foi')
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className='product container'>
      <div className="container-img">
        <img src={productImage} alt=''onClick={handleImageClick}  />
      </div>
      <div className='description'>
        <p>
          <b>{productName}</b>
        </p>        
      </div>
      <div className="bottons">
        <p>${price}</p>
        <button className='addToCartBttn' onClick={() => addToCart(id)}>
        <ShoppingCartSimple size={20} /> {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
     </div>
      {showModal && (
        <div className='modalBoxes'>
          <div className='modal-content-boxes'>
            <div className="nameProduct">
                <span className='close' onClick={handleModalClose}>
                &times;
                </span>            
                <h2>{productName}</h2>
                <img src={productImage} alt='' />
            </div>
            <div className="desc">
                <h1>Description</h1>
                <p>{desc}</p>
                <div className="bottons">
                  <h3>${price}</h3>
                  <button className='addToCartBttn' onClick={() => addToCart(id)}>
                  <ShoppingCartSimple size={20} /> {cartItemAmount > 0 && <>({cartItemAmount})</>}
                  </button>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
