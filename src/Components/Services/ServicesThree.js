import { Link } from "react-router-dom";
import servicesThreeData from "./servicesThreeData";

const ServicesThree = () => {
    return (
        <section className="our-services-box-wrapper section-padding bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-8 mb-4 offset-xl-3 offset-lg-2 col-12 text-center">
                        <div className="section-title-3">
                            <h6>Our Services</h6>
                            <h2>What solutions we offer your</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        servicesThreeData.map((data) => (
                            <div className="col-xl-4 col-md-6" key={data.id}>
                                <div className="single-services-box sb1">
                                    <div className="icon">
                                        <img src={data.img} alt="" />
                                    </div>
                                    <div className="content">
                                        <h3><Link to="/servicesDetails">{data.title}</Link></h3>
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

export default ServicesThree;