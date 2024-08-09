import { Link } from "react-router-dom";
import logoImg from '../../assets/img/logo-4.png';

const FooterFour = () => {
    return (
        <>
            <footer className="footer-4 footer-wrap">
                <div className="footer-widgets-wrapper text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="footer-site-info me-lg-5 mt-40">
                                    <Link to='/'><img src={logoImg} alt="busico" /></Link>
                                    <ul>
                                        <li>
                                            <a href="#">(+88) 587 - 365 - 202</a>
                                        </li>
                                        <li>
                                            <a href="#">info@example.com</a>
                                        </li>
                                        <li>
                                            <a href="#">Green Road, Street Park, New York, USA - 579542</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-2 pl-xl-5 col-12">
                                <div className="single-footer-wid">
                                    <div className="wid-title">
                                        <h3>Information</h3>
                                    </div>
                                    <ul>
                                        <li><Link to="/about">About Company</Link></li>
                                        <li><Link to="/services">Communication</Link></li>
                                        <li><Link to="/services">Internet of Things</Link></li>
                                        <li><Link to="/services">Product Development</Link></li>
                                        <li><Link to="/services">Industrial Automation</Link></li>
                                        <li><Link to="/contact">Payment Getway</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-2 offset-xl-1  col-12">
                                <div className="single-footer-wid">
                                    <div className="wid-title">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <ul>
                                        <li><Link to="/about">About Company</Link></li>
                                        <li><Link to="/services">Services</Link></li>
                                        <li><Link to="/services">Internet of Things</Link></li>
                                        <li><Link to="/services">Product Development</Link></li>
                                        <li><Link to="/services">Industrial Automation</Link></li>
                                        <li><Link to="/contact">Payment Getway</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3 offset-xl-1 col-12">                        
                            <div className="single-footer-wid newsletter_widget style-2">
                                <div className="wid-title">
                                <h3>Newsletter</h3>
                                </div>
                                <div className="newsletter_box">
                                <form action="#">
                                    <i className="fal fa-envelope" />
                                    <input type="email" placeholder="Enter email address" required />
                                    <button className="submit-btn" type="submit">Subscribe Now <i className="fas fa-paper-plane" /></button>
                                </form>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 order-3 mt-3 mt-lg-0 order-lg-1 col-12 text-center text-md-start">
                                <div className="copyright-info">
                                    <p>© 2022 Copyright By <Link to="/">Busico</Link>. All Rights Reserved</p>                            
                                </div>
                            </div>
                            <div className="col-lg-2 text-center order-1 order-lg-2 col-12">
                                <div className="footer-social">
                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                    <a href="#"><i className="fab fa-twitter" /></a>
                                    <a href="#"><i className="fab fa-instagram" /></a>
                                    <a href="#"><i className="fab fa-linkedin-in" /></a>
                                </div>
                            </div>
                            <div className="col-md-5 col-12 order-1 order-lg-2 ">
                                <div className="footer-menu-3 mt-3 mt-lg-0 text-center text-md-end">
                                    <ul>
                                        <li><Link to="/about">Term & Condition</Link></li>
                                        <li><Link to="/services">Privacy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterFour;