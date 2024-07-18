import React from 'react'
import { Link } from 'react-router-dom'

const FooterThree = () => {
  return (

    <footer className="footer-3 footer-wrap">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-lg-5 order-3 col-md-6 mt-3 mt-lg-0 order-lg-1 col-12 text-center text-md-start">
                <div className="copyright-info">
                    <p>© 2022 Copyright By <Link to='/'>Busico</Link>. All Rights Reserved</p>                            
                </div>
            </div>
            <div className="col-lg-2 col-md-12 text-center order-1 order-lg-2 col-12">
                <div className="footer-social">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-instagram" /></a>
                    <a href="#"><i className="fab fa-linkedin-in" /></a>
                </div>
            </div>
            <div className="col-lg-5 col-md-6 col-12 order-1 order-lg-2 ">
                <div className="footer-menu-2 mt-3 mt-lg-0 text-center text-md-end">
                <ul>
                    <li><Link to="/services">Our Services</Link></li>
                    <li><Link to="/contact">Privacy Policy</Link></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    </footer>

  )
}

export default FooterThree