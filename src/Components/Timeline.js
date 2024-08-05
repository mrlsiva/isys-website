import React from 'react'
import icon1 from '../assets/img/icons/idea.png';
import icon2 from '../assets/img/icons/team.png';


const Timeline = () => {
  return (
    <section className="company-timeline-wrapper section-padding">
        <div className="container">
            <div className="row mtm-40">
                <div className="col-lg-4  col-md-6 offset-lg-1 pe-lg-0">
                    <div className="timeline-content text-lg-end">
                        <div className="single-timeline-box">
                            <h6>Innovation idea</h6>
                            <p>The main goal of this software is to help enterprise level businesses generate and evaluate ideas so that innovation can be cultivated and implemented.</p>
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
                          
                            <h6>Streamline</h6>
                            <p>If you are a big company, we can help you streamline the processes and growth in the long term.</p>
                        </div>
                        <div className="single-timeline-box">
                            <span>2010 - 2020</span>
                            <h6>Creative team</h6>
                            <p>Isys Technologies is your team workspace where knowledge and collaboration meet to achieve great things.</p>
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