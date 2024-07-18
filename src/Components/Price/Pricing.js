import React from 'react'
import icon1 from '../../assets/img/icons/p1.png';
import icon2 from '../../assets/img/icons/p2.png';
import icon3 from '../../assets/img/icons/p3.png';
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section className="pricing-wrapper section-padding pricing-bg">
        <div className="container">
        <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
            <div className="block-contents text-center">
                <div className="section-title">
                <span>Pricing Table</span>
                <h2>Smart Pricing Plans For Smooth Work</h2>
                </div>
            </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
            <div className="single-pricing-plan">
                <div className="package-head">
                <div className="icon">
                    <img src={icon1} alt="" />
                </div>
                <div className="package-title">
                    <h6>Basic</h6>
                    <h2>$49.00</h2>
                </div>
                </div>
                <div className="package-features">
                <span>24/7 Tech Support</span>
                <span>Free Equipment Tools</span>
                <span>Advance Options</span>
                <span>Motion Detection Plan</span>
                <span>Night Vision</span>
                </div>
                <div className="package-btn">
                <Link to="/contact">Choose Plan</Link>
                </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
            <div className="single-pricing-plan active">
                <div className="package-head">
                <div className="icon">
                    <img src={icon2} alt="" />
                </div>
                <div className="package-title">
                    <h6>Standard</h6>
                    <h2>$69.00</h2>
                </div>
                </div>
                <div className="package-features">
                <span>24/7 Tech Support</span>
                <span>Free Equipment Tools</span>
                <span>Advance Options</span>
                <span>Motion Detection Plan</span>
                <span>Night Vision</span>
                </div>
                <div className="package-btn">
                <Link to="/contact">Choose Plan</Link>
                </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
            <div className="single-pricing-plan">
                <div className="package-head">
                <div className="icon">
                    <img src={icon3} alt="" />
                </div>
                <div className="package-title">
                    <h6>Premium</h6>
                    <h2>$89.00</h2>
                </div>
                </div>
                <div className="package-features">
                <span>24/7 Tech Support</span>
                <span>Free Equipment Tools</span>
                <span>Advance Options</span>
                <span>Motion Detection Plan</span>
                <span>Night Vision</span>
                </div>
                <div className="package-btn">
                <Link to="/contact">Choose Plan</Link>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>  

  )
}

export default Pricing