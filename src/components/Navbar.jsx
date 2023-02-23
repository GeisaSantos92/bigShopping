import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './Navbar.css'
import { ShopContext } from '../context/shop-context'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavbarNav = () => {  

  const { cartItems } = useContext(ShopContext);

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      totalItems += cartItems[item];
    }
    return totalItems;
  };

  return (
    <div className='navbar containerMax'>
        <Navbar  className='container' expand="lg">
            <Container className='links ' >
                <Link to='/'>Logo</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto ">
                  <Link to='/'>Home</Link>
                  <Link to='/about'>About Us</Link>                  
                  <Link to='/contact'>Contact</Link>
                  <Link to='/cart'>
                  <ShoppingCart size={25}/> 
                  <span className='cart-item'>{getTotalCartItems()}</span>
                  </Link>  
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
