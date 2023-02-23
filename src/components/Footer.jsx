import React from 'react'
import './Footer.css'
import { CreditCard, InstagramLogo, FacebookLogo,TwitterLogo, WhatsappLogo, TelegramLogo } from 'phosphor-react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='containerMax'>
         <hr />
        <div className="container container-footer">
            <div className='footer'>
                <h1><a href=''>Logo</a></h1>
                <span>@Copy&write 2023</span>
                <div className="credit-cards">
                <CreditCard size={32} />
                <CreditCard size={32} />
                <CreditCard size={32} />
                <CreditCard size={32} />
                <CreditCard size={32} />
                </div>
            </div>
            <div className='footer'>
                <Link to='/about'>About Us</Link>
                <Link to='/'>Contact</Link>
                <Link to='/'>Adress</Link>
                <Link to='/'>Blog</Link>
            </div>
            <div className='footer'>
                <Link to='/'>About Us</Link>
                <Link to='/'>Contact</Link>
                <Link to='/'>Adress</Link>
                <Link to='/'>Blog</Link>
            </div>
            <div className='footer'>
                <Link to='/'>+234 2545 2533</Link>
                <Link to='/'>Street Wall 238, United States</Link>
                <div className="social-midias">
                    <Link to='https:www.instagram.com' target='_blank'><InstagramLogo size={25} /></Link>
                    <Link to='https:www.facebook.com'target='_blank'><FacebookLogo size={25} /></Link>
                    <Link to='https:www.twitter.com'target='_blank'><TwitterLogo size={25} /></Link>
                    <Link to='https:www.whatsapp.com' target='_blank'> <WhatsappLogo size={25} /></Link>
                    <Link to='https:web.telegram.org'target='_blank'><TelegramLogo size={25} /></Link>
                </div>
            </div>
            <div></div>
        </div>
    </footer>
  )
}
