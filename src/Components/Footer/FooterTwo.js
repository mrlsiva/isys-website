import React from 'react'
import { Link } from 'react-router-dom'
import FooterCta from './FooterCta'
import FooterOneCopyrights from './FooterOneCopyrights'
import footerMap from '../../assets/img/footer-map.png';

const FooterTwo = () => {
  return (
    <footer className="footer-2 footer-wrap">
        <div className="footer-widgets-wrapper text-white">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 pe-xl-0 col-sm-6 col-12">
                        <div className="single-footer-wid site_info_widget">
                            <div className="wid-title">
                                <h3>Get In Touch</h3>
                            </div>
                            <div className="contact-us">
                                <div className="single-contact-info">
                                    <div className="icon">
                                        <i className="fal fa-phone"></i>
                                    </div>
                                    <div className="contact-info">
                                        <p>+673 853 605 985</p>
                                        <p>908 9098 987 98</p>
                                    </div>
                                </div>
                                <div className="single-contact-info">
                                    <div className="icon">
                                        <i className="fal fa-envelope"></i>
                                    </div>
                                    <div className="contact-info">
                                        <p>info@example.com</p>
                                        <p>info@webexample.com</p>
                                    </div>
                                </div>
                                <div className="single-contact-info">
                                    <div className="icon">
                                        <i className="fal fa-map-marker-alt"></i>
                                    </div>
                                    <div className="contact-info">
                                        <p>7300-7398 Colonial Rd, Brooklyn, <br/>
                                            NY 11209</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 offset-xl-1 col-xl-3 ps-xl-5 col-12">
                        <div className="single-footer-wid">
                            <div className="wid-title">
                                <h3>Quick Links</h3>
                            </div>
                            <ul>
                                <li><Link to="/about">About Company</Link></li>
                                <li><Link to="/services">Communication Services</Link></li>
                                <li><Link to="/services">Internet of Things</Link></li>
                                <li><Link to="/services">Product Development</Link></li>
                                <li><Link to="/services">Industrial Automation</Link></li>
                                <li><Link to="/contact">Payment Getway</Link></li>
                            </ul>
                        </div>
                    </div> 

                    <div className="col-sm-6 col-xl-4 offset-xl-1 col-12">                        
                        <div className="single-footer-wid newsletter_widget">
                            <div className="wid-title">
                                <h3>Our Footprint</h3>
                            </div>
                            <div className="map-location">
                                <img src={footerMap} alt=""/>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

        <FooterCta/>
        <FooterOneCopyrights/>
    </footer> 
  )
}

export default FooterTwo