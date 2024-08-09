import React from 'react'
import bannerBg from '../../assets/img/man-with-cap.png';


const BestFeatures = () => {
  return (
    <section className="best-featured-wrapper section-padding pb-5">
        <div className="container">
            <div className="row mtm-40 align-items-center">
            <div className="col-lg-4 col-md-6 col-12">
                <div className="single-best-featured right">
                <div className="icon">
                    <i className="flaticon-flow-chart" />
                </div>
                <div className="content-text">
                    <h5>Technology</h5>
                    <p>We are expert your all work is very nice waiting for next project.</p>
                </div>
                </div>
                <div className="single-best-featured right">
                <div className="icon">
                    <i className="flaticon-writing" />
                </div>
                <div className="content-text">
                    <h5>Core Planning</h5>
                    <p>We are expert your all work is very nice waiting for next project.</p>
                </div>
                </div>
                <div className="single-best-featured right">
                <div className="icon">
                    <i className="flaticon-interior-design" />
                </div>
                <div className="content-text">
                    <h5>Project Result</h5>
                    <p>We are expert your all work is very nice waiting for next project.</p>
                </div>
                </div>
            </div>
            <div className="col-lg-4 p-md-0 mt-5 mb-5 mt-md-0 mb-md-0 col-md-6 col-12">
                <div className="center-img text-center mbm-50">
                <img src={bannerBg} alt="" />
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="single-best-featured">
                <div className="icon">
                    <i className="flaticon-secure-shield" />
                </div>
                <div className="content-text">
                    <h5>Trusted Clients</h5>
                    <p>We are expert your all work is very nice waiting for next project.</p>
                </div>
                </div>
                <div className="single-best-featured">
                <div className="icon">
                    <i className="flaticon-team" />
                </div>
                <div className="content-text">
                    <h5>Skilled Team</h5>
                    <p>We are expert your all work is very nice waiting for next project.</p>
                </div>
                </div>
                <div className="single-best-featured">
                <div className="icon">
                    <i className="flaticon-profits" />
                </div>
                <div className="content-text">
                    <h5>Save Money</h5>
                    <p>We are expert your all work is very nice waiting for next project.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>

  )
}

export default BestFeatures