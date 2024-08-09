import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import portfolioTwoData from "./portfolioTwoData";
import { Link } from "react-router-dom";
import sectionBg from '../../assets/img/project-bg.jpg';
import { Navigation } from "swiper";

const PortfolioTwo = () => {
    return (
        <section className="project-carousel-wrapper bg-cover section-padding" style={{backgroundImage: `url(${sectionBg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-8">
                        <div className="block-contents">
                            <div className="section-title">
                                <h5 className="textleft text-white">Project</h5>
                                <span>Recent Portfolio</span>
                                <h2 className="text-white">Let's See recent Projects</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-carousel-card-active text-white">
                <Swiper 
                    slidesPerView={3} 
                    loop
                    navigation
                    modules={[Navigation]}
                    breakpoints={{
                        "@0.00": {
                          slidesPerView: 1,
                          spaceBetween: 20,
                          
                        },
                        "@0.75": {
                          slidesPerView: 2,
                          spaceBetween: 20,
                          
                        },
                        "@1.00": {
                          slidesPerView: 2,
                          spaceBetween: 20,
                          
                        },
                        "@1.50": {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                      }}
                >
                {
                    portfolioTwoData.map((data) => (
                        <SwiperSlide className="single-project-card" key={data.id}>
                            <Link to="/projectDetails" className="project-thumb bg-cover" style={{backgroundImage: `url(${data.img})`}}
                            ></Link>
                            <div className="contents">
                                <div className="project-number">
                                    <h2>{data.index}</h2>
                                </div>
                                <div className="project-details">
                                    <span>{data.category}</span>
                                    <h3><Link to="/projectDetails">{data.location}</Link></h3>
                                    <p>Client: {data.client}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </div>
        </section>
    )
}

export default PortfolioTwo;