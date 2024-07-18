import React from 'react'
import img1 from '../../assets/img/why-bg.jpg';

const WhyUs = () => {
  return (
    <section className="why-choice-us section-padding">
        <div className="why-choice-bg bg-cover d-none d-xl-block" style={{backgroundImage: `url(${img1})`}}></div>
        <div className="container">
            <div className="row">
                <div className="offset-xl-6 offset-lg-4 col-lg-8 col-xl-6 col-12">
                    <div className="block-contents">
                        <div className="section-title">
                            <span>Why Choose Us</span>
                            <h2>People Choice Us For Success</h2>
                        </div>
                    </div>
                    <div className="single-icon-circle-item">
                        <div className="icon">
                            <i className="flaticon-cpu"></i>
                        </div>
                        <div className="contents">
                            <h3>Advanced Technology</h3>
                            <p>We are expert and professional.But I must explain to you how all this mistaken ofenoun cing pleasure and praising.</p>
                        </div>
                    </div>
                    <div className="single-icon-circle-item">
                        <div className="icon">
                            <i className="flaticon-secure-shield"></i>
                        </div>
                        <div className="contents">
                            <h3>trustworthy</h3>
                            <p>We are expert and professional.But I must explain to you how all this mistaken ofenoun cing pleasure and praising.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyUs