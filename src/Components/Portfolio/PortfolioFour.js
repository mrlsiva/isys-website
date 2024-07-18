import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import portfolioFourData from "./portfolioFourData";
import { Link } from "react-router-dom";


const PortfolioFour = () => {
    return (
        <section className="portfolio-showcase-carosuel-wrapper fix section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-8 mb-4 offset-xl-3 offset-lg-2 col-12 text-center">
                        <div className="section-title-4">
                            <h2>We're Happy to share our 
                                recent projects
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio-showcase-carousel-active">
                <Swiper pagination={true} modules={[Pagination]}
                    slidesPerView={5} 
                    spaceBetween={15} 
                    loop
                    breakpoints={{
                        "@0.00": {
                          slidesPerView: 1,
                          spaceBetween: 20,
                          centeredSlides: true,
                          
                        },
                        "@0.75": {
                          slidesPerView: 2,
                          spaceBetween: 20,
                          centeredSlides: true,
                          
                        },
                        "@1.00": {
                          slidesPerView: 4,
                          spaceBetween: 20,
                          
                        },
                        "@1.50": {
                          slidesPerView: 5,
                          spaceBetween: 20,
                        },
                      }}
                >
                {
                    portfolioFourData.map((data) => (
                        <SwiperSlide className="single-recent-portfolio bg-cover" key={data.id} style={{backgroundImage: `url(${data.img})`}}>
                            <div className="project-details">
                                <h5><Link to="/projectDetails">{data.title}</Link></h5>
                                <span>{data.category}</span>
                                <Link to="/projectDetails" className='project-link'><i className="fal fa-chevron-right" /></Link>
                            </div>
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </div>
        </section>
    )
}

export default PortfolioFour;