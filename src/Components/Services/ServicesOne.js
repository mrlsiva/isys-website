import { Link } from "react-router-dom";
import servicesOneData from "./servicesOneData";

const ServicesOne = () => {
    return (
        <section className="our-service-wrapper section-padding bg-gray">
        <div className="container">
            <div className="row mtm-30">
                <div className="col-md-6 col-12 col-lg-4 mt-30">
                    <div className="block-contents">
                        <div className="section-title">
                            <span>Featured Service</span>
                            <h2>What We Offer You</h2>
                        </div>
                        <p>Our promise as a contractor is to build strong community value into every projects</p>
                    </div>
                </div>
                {
                    servicesOneData.map((data) => (
                        <div className="col-md-6 col-12 col-lg-4 mt-30" key={data.id}>
                            <div className="single-service-box style-1">
                                <div className="service-bg bg-cover" style={{backgroundImage: `url(${data.bg})`}}></div>
                                <div className="icon">
                                    <i className={`flaticon-${data.icon}`}></i>
                                </div>
                                <div className="contents">
                                    <h4><Link to="/servicesDetails">{data.title}</Link></h4>
                                    <p>{data.desc}</p>
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

export default ServicesOne;