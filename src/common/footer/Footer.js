import React from 'react'
import '../../stylesheets/style.css'
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
            <div className="tf-container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="location">
                            <div className="title">You have a question</div>
                            <div className="address">
                                <div className="icon"><span className="icon-map-pin"></span></div>
                                <div className="content">
                                    <div className="text">India</div>
                                    <p>No.825A, 3rd Main Road, Ram Nagar South, Madipakkam, Chennai, TamilNadu - 600091</p>
                                </div>
                            </div>
                            <div className="address">
                                <div className="icon"><span className="icon-map-pin"></span></div>
                                <div className="content">
                                    <div className="text">Canada</div>
                                    <p>6410 Chaumont Crescent, Mississauga, ON L5N 2M8, Canada</p>
                                </div>
                            </div>
                            <div className="phone">
                                <div className="icon"><span className="icon-phone"></span></div>
                                <div className="content">
                                    <div className="text">Mobile</div>
                                    <p>+91 8754474012</p>
                                </div>
                                <span></span>
                                <div className="content">
                                    <div className="text">Landline</div>
                                    <p>+91 4435579675</p>
                                </div>
                            </div>
                            <div className="mail">
                                <div className="icon"><span className="icon-mail-envelope-closed"></span></div>
                                <div className="content">
                                    <div className="text">Email</div>
                                    <p>info@isystech.net</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service">
                            <div className="title">Services Link</div>
                            <ul>
                                <li className="icon-arrow_forward_ios">
                                    <a href="services-detail.html">Development</a>
                                </li>
                                <li className="icon-arrow_forward_ios">
                                    <a href="services-detail.html">Software Consulting</a>
                                </li>
                                <li className="icon-arrow_forward_ios">
                                    <a href="services-detail.html">HR Consulting</a>
                                </li>
                                <li className="icon-arrow_forward_ios">
                                    <a href="services-detail.html">IT Support Helpdesk</a>
                                </li>
                                <li className="icon-arrow_forward_ios">
                                    <a href="services-detail.html">Corporate Services</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="comment-respond">
                            <h3 className="title">Request a call back</h3>
                            <form action="#">
                                <div className="comment-wrap-input">
                                    <div className="comment name-number">
                                        <fieldset className="infor-container">
                                            <input pattern="[A-Za-z\s]*" type="text" placeholder="Full name" name="author" required/>
                                        </fieldset>
                                        <fieldset className="infor-container">
                                            <input pattern="[+0-9].{8,}" type="text" placeholder="Your phone" name="number" required/>
                                        </fieldset>
                                    </div>
                                    <div className="select">
                                        <select className="wide">
                                            <option value="default" selected="">Choose the service to consult</option>
                                            <option value="1">Development</option>
                                            <option value="2">HR Consulting</option>
                                            <option value="3">Software Consulting</option>
                                            <option value="4">IT Support Helpdesk</option>
                                            <option value="4">Corporate Services</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-submit">
                                    <span className="wrap-input-submit">
                                        <button>Send</button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="tf-container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="logo-bottom"><img src="images/logo.png" alt=""/></div>
                    </div>
                    <div className="col-md-4">
                        <p>©2024 Isys Technologies All Rights Reserved</p>
                    </div>
                    <div className="col-md-4">
                        <div className="widget-social">
                            <a href="#"><span className="icon-facebook"></span></a>
                            <a href="#"><span className="icon-twitter"></span></a>
                            <a href="#"><span className="icon-linkedin2"></span></a>
                            <a href="#"><span className="icon-instagram"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
