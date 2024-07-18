import React from 'react'
import icon1 from '../assets/img/icons/t1.png';
import icon2 from '../assets/img/icons/t2.png';


const Timeline = () => {
  return (
    <section className="company-timeline-wrapper section-padding">
        <div className="container">
            <div className="row mtm-40">
                <div className="col-lg-4  col-md-6 offset-lg-1 pe-lg-0">
                    <div className="timeline-content text-lg-end">
                        <div className="single-timeline-box">
                            <span>1990 - 1995</span>
                            <h6>Startup Construction</h6>
                            <p>Busico also launch exciting events throughout the year. which is why our projects never quite look or feel the same way depends on the design.</p>
                        </div>
                        <div className="single-timeline-box">
                            <span>1990 - 1995</span>
                            <h6>Construction Setup</h6>
                            <p>We have intentionally never developed a stylistic formula for our work, which is why our projects never quite look or feel the same.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 d-none mt-40 d-lg-block">
                    <div className="time-line-icon">
                        <div className="single-icon">
                            <img src={icon1} alt=""/>
                        </div>
                        <div className="single-icon">
                            <img src={icon2} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 ps-lg-0">
                    <div className="timeline-content">
                        <div className="single-timeline-box">
                            <span>1988 - 2006</span>
                            <h6>Achieved Milestone</h6>
                            <p>We have intentionally never developed a stylistic formula for our work, which is why our projects never quite look or feel the same.</p>
                        </div>
                        <div className="single-timeline-box">
                            <span>2010 - 2020</span>
                            <h6>Mashable Design</h6>
                            <p>Busico also launch exciting events throughout the year. which is why our projects never quite look or feel the same way depends on the design.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-lg-5 mt-3">
                <div className="col-md-6 col-12 col-lg-4">
                    <div className="single-icon-border-box">
                        <div className="icon">
                            <i className="flaticon-trust"></i>
                        </div>
                        <div className="content">
                            <h6><span>Trusted</span> Worldwide</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12 col-lg-4">
                    <div className="single-icon-border-box">
                        <div className="icon">
                            <i className="flaticon-cashier-machine"></i>
                        </div>
                        <div className="content">
                            <h6><span>Secure</span> Registered by Govt</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12 col-lg-4">
                    <div className="single-icon-border-box">
                        <div className="icon">
                            <i className="flaticon-goal"></i>
                        </div>
                        <div className="content">
                            <h6><span>Mission</span> For Achivement</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Timeline