import React from 'react'
import koppa from '../../assets/img/koppa.png';
import CountUp from 'react-countup'; 


const Skill = () => {
  return (
    <section className="skill-wrapper theme-bg section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-lg-2">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-12">
                            <div className="single-fun-fact style-2">
                                <h2><CountUp end={30} duration={3}></CountUp>K+</h2>
                                <h3>PROJECT DONE</h3>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-12">
                            <div className="single-fun-fact style-2">
                                <h2><CountUp end={980} duration={3}></CountUp>+</h2>
                                <h3>HAPPY CLIENTS</h3>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-12">
                            <div className="single-fun-fact style-2">
                                <h2><CountUp end={50} duration={3}></CountUp>+</h2>
                                <h3>Skilled Employee</h3>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-12">
                            <div className="single-fun-fact style-2">
                                <h2><CountUp end={98} duration={3}></CountUp>%</h2>
                                <h3>Country Coverage</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 text-white mt-5 mt-lg-0 col-12">
                    <div className="block-contents">
                        <div className="section-title mb-10">
                            <span>Expertise Areas</span>
                            <h2>We Increased Our Skills up</h2>
                        </div>
                        <p>It's the greatest tool ever invented to connect and learn and work and play. But most people are stuck with just one overpriced.</p>
                    </div>

                    <div className="skill-wrapper">
                        <div className="single-progress-bar">
                            <div className="title justify-content-between d-flex align-items-center">
                                <h5>Development</h5>
                                <span className="wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="1s">90%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay=".1s" role="progressbar" style={{width: '90%'}}></div>
                            </div>
                        </div>
                        <div className="single-progress-bar">
                            <div className="title justify-content-between d-flex align-items-center">
                                <h5>Client Support</h5>
                                <span className="wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="1.3s">87%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay=".5s" role="progressbar" style={{width: '87%'}}></div>
                            </div>
                        </div>
                        <div className="single-progress-bar">
                            <div className="title justify-content-between d-flex align-items-center">
                                <h5>Strategic Planning</h5>
                                <span className="wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="1.6s">94%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay=".9s" role="progressbar" style={{width: '94%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="koppa-img d-none d-xxl-block">
            <img src={koppa} alt="" className="wow fadeInLeft" data-wow-delay=".4s" data-wow-duration="1.5s"/>
        </div> */}
    </section> 
  )
}

export default Skill