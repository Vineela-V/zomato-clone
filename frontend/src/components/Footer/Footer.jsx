import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className='footer-content'>
         <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>If you want to explore world , you need to understant the nature.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
         </div>
         <div className="footer-content-center">
            <h2>Comapny</h2>
            <ul>
                <li>Home</li>
                <li>Abou us</li>
                <li>Delivery</li>
                <li>Privacy Ploicy</li>
            </ul>
          </div>
         <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
            <li>+91-987-654-3221</li>
            <li>contact@tomato.com</li>
            </ul>
         </div>
       </div>
       <hr />
       <p className="footer-copyright">copyright 2025 © Tomato.com</p>
    </div>
  )
}

export default Footer
