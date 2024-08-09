import React from 'react'
import { Link } from "react-router-dom";
import image1 from '../../assets/img/gallery/1.jpg';
import image2 from '../../assets/img/gallery/5.jpg';
import image3 from '../../assets/img/gallery/6.jpg';


const Details = () => {
    return (
    <section className="service-details-wrapper section-padding">
    <div className="container">
        <div className="row">
        <div className="col-lg-3 col-md-4 mt-5 mt-md-0 col-12 order-2 order-md-1">
            <div className="service-details-sidebar">
            <div className="single-service-sidebar">
                <div className="sidebar-title">
                <h3>Service Category</h3>
                </div>
                <ul>
                    <li><Link to="/ServiceDetails">01. General Contracting</Link></li>
                    <li><Link to="/ServiceDetails">02. Apartment Design</Link></li>
                    <li><Link to="/ServiceDetails">03. Building Renovation</Link></li>
                    <li><Link to="/ServiceDetails">04. Architecture Design</Link></li>
                    <li><Link to="/ServiceDetails">05. Building Construction</Link></li>
                    <li><Link to="/ServiceDetails">06. Oil &amp; Gas Engineering</Link></li>
                </ul>
            </div>
            <div className="single-service-sidebar">
                <div className="sidebar-title">
                <h3>Download Brochures</h3>
                </div>
                <div className="brochures-download">
                <a href="#" className="theme-btn"><i className="fal fa-file-pdf" />Download .PDF</a>
                <a href="#" className="theme-btn"><i className="fal fa-file-word" />Download .DOC</a>
                <a href="#" className="theme-btn"><i className="fal fa-file-powerpoint" />Download .PPT</a>
                </div>
            </div>
            <div className="single-service-sidebar site_info_widget">
                <div className="sidebar-title">
                <h3>Contact Us</h3>
                </div>
                <div className="contact-us">
                <div className="single-contact-info">
                    <div className="icon">
                        <i className="fal fa-phone" />
                    </div>
                    <div className="contact-info">
                        <span>Phone Number</span>
                        <p>908 9098 987 98</p>
                    </div>
                </div>
                <div className="single-contact-info">
                    <div className="icon">
                        <i className="fal fa-envelope" />
                    </div>
                    <div className="contact-info">
                    <span>Email Address</span>
                    <p>info@supportexam.com</p>
                    </div>
                </div>
                <div className="single-contact-info">
                    <div className="icon">
                    <i className="fal fa-map-marker-alt"/>
                    </div>
                    <div className="contact-info">
                    <span>Office Address</span>
                    <p>14/A, Ping Tower, NYC</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-9 col-md-8 ps-lg-5 col-12 order-1 order-md-2">
            <div className="service-details-content-wrapper pl-0 pl-md-4">
            <img src={image1} alt=""/>
            <h2>Start building construction planning</h2>
            <p>From oil changes, filter replacements, and fluid flushes to brakes and brake repair, shocks and struts, muffler repair, tires, and wheel alignment, we’ve got you covered. Use the quick links in the gold bar to book a repair Service store. Eery single feature and page element will look amazing on the  mobile phones. It includes page templates and layouts created specifically.</p>
            <h2>Quality Construction</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ipsa! Repellendus at accusantium dolore rerum exercitationem iusto error? Odio deleniti in iste tenetur placeat excepturi eum officia ratione, vel aperiam?</p>
            <div className="row">
                <div className="col-md-6 col-12">
                    <img src={image2} alt=""/>
                </div>
                <div className="col-md-6 col-12">
                    <img src={image3} alt=""/>
                </div>
            </div>
            <h2>What You Receive?</h2>
            <p>All kinds of laptop, desktop computer servicing center forIt is a long established fact that a reader will be distracted by the readable computer disk. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec. Predefined chunks as necessary, making this the first true generator on the Internet. Many desktop publishing packages and web page editors.</p>
            <blockquote>
                From oil changes, filter replacements, and fluid flushes to brakes and brake repair, shocks and struts, muffler repair
            </blockquote>
            </div>
            <div className="faq-content pl-0 pl-md-4">
            <h2>Common Question for this project</h2>
            <div className="faq-accordion">
                <div className="accordion no-border me-lg-5" id="accordion">
                <div className="accordion-item">
                    <h4 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                        How do I find the right architect for my project?
                    </button>
                    </h4>
                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#accordion">
                    <div className="accordion-body">
                        We have intentionally never developed a stylistic formula for our work, which is why our projects never quite look or feel the same. Each of our spaces is the result of our ability to listen. These six statements represent common beliefs exist today.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h4 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="true" aria-controls="faq2">
                        What services do architects provide?
                    </button>
                    </h4>
                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#accordion">
                    <div className="accordion-body">
                        We have intentionally never developed a stylistic formula for our work, which is why our projects never quite look or feel the same. Each of our spaces is the result of our ability to listen.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h4 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                        How do I find the right architect for my project?
                    </button>
                    </h4>
                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                    <div className="accordion-body">
                        We have intentionally never developed a stylistic formula for our work, which is why our projects never quite look or feel the same. Each of our spaces is the result of our ability to listen.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h4 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                        How are architects compensated?
                    </button>
                    </h4>
                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                    <div className="accordion-body">
                        We have intentionally never developed a stylistic formula for our work, which is why our projects never quite look or feel the same. Each of our spaces is the result of our ability to listen.
                    </div>
                    </div>
                </div>
                </div>                      
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>

    )
}

export default Details