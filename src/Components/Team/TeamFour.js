import React from 'react'
import teamFourData from './teamFourData'

const TeamFour = () => {
  return (
    <section className="our-team-two-wrapper half-bg section-padding pb-0">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-8 mb-4 offset-xl-3 offset-lg-2 col-12 text-center">
                    <div className="section-title-3">
                        <h6>Our Team</h6>
                        <h2>Meet the team behind your success</h2>
                    </div>
                </div>
            </div>
            
            <div className="row text-center">
                {
                    teamFourData.map((data) => (
                    <div className="col-xl-4 col-md-6" key={data.id}>
                        <div className="single-team-card team1 bg-cover" style={{backgroundImage: `url(${data.img})`}}>
                            <div className="member-info-card">
                                <div className="member-details">
                                    <h3>{data.name}</h3>
                                    <span>{data.designation}</span>
                                </div>
                                <div className="member-social-net">
                                    <a href={data.fb}><i className="fab fa-facebook-f"></i></a>
                                    <a href={data.twitter}><i className="fab fa-twitter"></i></a>
                                    <a href={data.insta}><i className="fab fa-instagram"></i></a>
                                    <a href={data.linkedIn}><i className="fab fa-linkedin"></i></a>
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

export default TeamFour