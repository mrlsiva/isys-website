import React from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = ({mobileMenu, handleMobileMenu}) => {
  return (
    <div className={mobileMenu ? 'mobile-nav' : 'mobile-nav show'}>
        <button onClick={handleMobileMenu} type="button" className="close-nav">
            <i className="fal fa-times-circle"></i>
        </button>
        <nav className="sidebar-nav">
            <ul className="metismenu" id="mobile-menu">
                {/* <li><a className="has-arrow" href="#">Homes</a>
                    <ul className="sub-menu">
                        <li><Link to="/">homepage 1</Link></li>
                        <li><Link to="/homeTwo">homepage 2</Link></li>
                        <li><Link to="/homeThree">homepage 3</Link></li>
                        <li><Link to="/homeFour">homepage 4</Link></li>
                    </ul>
                </li> */}
                <li><Link to="/about">about us</Link></li>
                <li><Link to="/services">Services</Link></li>
                {/* <li>
                    <a className="has-arrow" href="#">Pages</a>
                    <ul className="sub-menu">
                        <li><Link to="/faq">faq</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/team">Team</Link></li>
                    </ul>
                </li> */}
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>

        <div className="action-bar">
            <a href="mailto:info@example.com"><i className="fal fa-envelope"></i>info@webmail.com</a>
            <a href="tel:123-456-7890"><i className="fal fa-phone"></i>987-098-098-09</a>
            <Link to='/contact' className="d-btn theme-btn">Contact Us</Link>
        </div>
    </div>    
     
  )
}

export default MobileMenu