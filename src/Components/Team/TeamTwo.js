import { Link } from "react-router-dom";
import teamTwoData from "./teamTwoData";

const TeamTwo = () => {
    return (
        <>
          <section className="our-team-wrapper section-padding">
                <div className="container">
                    <div className="row mtm-40">
                        <div className="col-md-6 col-xl-4 mt-40 col-12">
                            <div className="block-contents">
                                <div className="section-title">
                                    <span>Skilled Team</span>
                                    <h2>Meet The Team</h2>
                                    <p>We are expert and professional.But I must explain to you how all this mistaken ofenoun cing pleasure and praising.</p>
                                </div>
                                <a href="contact.html" className="theme-btn minimal-btn mt-30">Join Our Team</a>
                            </div>
                        </div>
                        
                        {
                            teamTwoData.map((data) => (
                                <div className="col-md-6 col-xl-4 col-12" key={data.id}>
                                    <div className="single-team-member">
                                        <div className="team-img">
                                            <img src={data.img} alt={data.name}/>
                                        </div>
                                        <div className="team-details-bar">
                                            <div className="member-details">
                                                <div className="member-data">
                                                    <span>{data.designation}</span>
                                                    <h3>{data.name}</h3>
                                                </div>
                                                <div className="social-profile">
                                                    <a href={data.fb}><i className="fab fa-facebook-f"></i></a>
                                                    <a href={data.twitter}><i className="fab fa-twitter"></i></a>
                                                    <a href={data.insta}><i className="fab fa-instagram"></i></a>
                                                    <a href={data.linkedIn}><i className="fab fa-linkedin"></i></a>
                                                </div>
                                            </div>
                                            <Link to='teamDetails' className="plus-btn"><i className="fal fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default TeamTwo;