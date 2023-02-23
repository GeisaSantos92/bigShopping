import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import { Product } from './Product';
import Bag from '../../assets/bag.png'
import './Shop.css';

export const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const navigate = useNavigate();

  const productsToDisplay = selectedCategory
    ? PRODUCTS.filter(product => product.category === selectedCategory)
    : PRODUCTS;

  return (
    <div className="containerMax ">        
        <div className='shop container'>
          <div className="banner">
            <div className="banner-txt">
              <h2>SHOP ONLINE EXCLUSIVES</h2>
              <h1>Big <span>Shopping</span></h1>
              <button onClick={() => navigate("/")}>Shop Now</button>
            </div>
            <div className="banner-img">
              <img src={Bag} alt="" />
            </div>
          </div>
           <div className="categoryFilter">
              <a onClick={() => setSelectedCategory(null)}>All</a>
              <a onClick={() => setSelectedCategory('eletronics')}>Eletronics</a>
              <a onClick={() => setSelectedCategory('woman')}>Woman </a>
              <a onClick={() => setSelectedCategory('man')}>Man </a>          
          </div> 
          <div className="products">
            {productsToDisplay.map((product) => (
              <Product key={product.id} data={product} />
            ))}
          </div>
      </div>
    </div>
  );
}