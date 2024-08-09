import React from 'react'
import teamFiveData from './teamFiveData'

import img1 from '../../assets/img/home4/t1.jpg';
import img2 from '../../assets/img/home4/t2.jpg';
import img3 from '../../assets/img/home4/t3.jpg';
import img4 from '../../assets/img/home4/t4.jpg';

const TeamFive = () => {
  return (
    <section className="team-wrapper circle-border fix section-bg section-padding">
        <div className="container">
            <div className="row mb-30">
                <div className="col-xl-6">
                    <div className="section-title-4">
                    <h2>Meet The Team Behind Your Success</h2>
                    </div>
                </div>
                <div className="col-xl-6 mt-4 mt-xl-0">
                    <p>Completely synergies resource for the taxing relationships via premier niche marketplace. Professionally agency service with dynamic innovation</p>
                    <div className="mt-20 d-flex align-items-center">
                        <div className="member-faces">
                            <div className="single-face bg-cover" style={{backgroundImage: `url(${img1})`}} />
                            <div className="single-face bg-cover" style={{backgroundImage: `url(${img2})`}} />
                            <div className="single-face bg-cover" style={{backgroundImage: `url(${img3})`}} />
                            <div className="single-face bg-cover" style={{backgroundImage: `url(${img4})`}} />
                        </div>
                        <div className="our-more-member ml-30"><span>More than 50k people Trust <br /> on our Experts</span></div>
                    </div>
                </div>
            </div>
            <div className="row">
               {
                    teamFiveData.map((data) => (
                        <div className="col-lg-4 col-sm-6 col-xl-3" key={data.id}>
                            <div className="single-team-member-3 bg-center bg-cover" style={{backgroundImage: `url(${data.img})`}}>
                                <div className="member-info-card">
                                    <div className="content">
                                    <h4>{data.name}</h4>
                                    <p>{data.designation}</p>
                                        <div className="social-profile">
                                            <a href={data.fb}><i className="fab fa-facebook-f"></i></a>
                                            <a href={data.twitter}><i className="fab fa-twitter"></i></a>
                                            <a href={data.insta}><i className="fab fa-instagram"></i></a>
                                            <a href={data.linkedIn}><i className="fab fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>


  )
}

export default TeamFive;