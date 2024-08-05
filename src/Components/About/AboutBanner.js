import React from 'react'

const AboutBanner = () => {
  return (
    <section className="about-banner-wrapper section-padding theme-bg">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                    <div className="block-contents">
                        <div className="section-title">
                            <span>Insight of The Company</span>
                            <h2 className="text-white">Our Company Grownup Last 10 Years</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="icon-arrow-down">
            <div className="rotate-icon">
                <i className="flaticon-navigation"></i>
            </div>
        </div>
    </section>
  )
}

export default AboutBanner