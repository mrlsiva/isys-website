import React from 'react'
import bannerBg from '../../assets/img/pricing-cta-bg.jpg';



const ServicesCta = () => {
  return (
    <section className="pricing-cta-wrapper text-white bg-cover bg-center section-padding" style={{backgroundImage: `url(${bannerBg})`}}>
        <div className="container">
            <div className="row">
            <div className="col-12 text-center col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 ps-xl-0 pe-xl-0">
                <div className="pricing-contents">
                <h1>We Offer The Renovating Services</h1>
                <div className="btn-wrapper d-flex align-items-end justify-content-center">
                    <a href="contact.html">Contact Us</a>
                    <div className="btn-cta">
                    <div className="icon">
                        <i className="flaticon-24-hours" />
                    </div>
                    <div className="content">
                        <span className="text-star">Call for support</span>
                        <h3>(555) 548 201 520</h3>
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

export default ServicesCta