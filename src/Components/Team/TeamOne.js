import { Link } from "react-router-dom";
import teamOneData from "./teamOneData";

const TeamOne = () => {
    return (
        <>
          <section className="our-team-wrapper section-padding pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 text-center col-12">
                            <div className="block-contents">
                                <div className="section-title">
                                    <span>06. Skilled Team</span>
                                    <h2>Meet The Expert Team</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        
                        {
                            teamOneData.map((data) => (
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

export default TeamOne;