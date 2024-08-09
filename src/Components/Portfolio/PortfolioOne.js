import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import portfolioOneData from "./portfolioOneData";
import { Link } from "react-router-dom";
import { SRLWrapper } from 'simple-react-lightbox';


const PortfolioOne = () => {
    return (
        <section className="portfolio-carousel-wrapper clearfix section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-xl-7 col-12">
                        <div className="block-contents">
                            <div className="section-title">
                                <span>05. Best Portfolio</span>
                                <h2>Recent Completed Projects</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-1 col-xl-3 offset-xl-2 text-lg-end col-12">
                        <Link to="/projects" className="theme-btn">View More Projects</Link>
                    </div>
                </div>
            </div>
            <div className="portfolio-carousel-active">
                <Swiper 
                    slidesPerView={3} 
                    spaceBetween={20} 
                    loop
                    breakpoints={{
                        "@0.00": {
                          slidesPerView: 2,
                          spaceBetween: 20,
                          centeredSlides: true,
                          
                        },
                        "@0.75": {
                          slidesPerView: 2,
                          spaceBetween: 20,
                          centeredSlides: true,
                          
                        },
                        "@1.00": {
                          slidesPerView: 3,
                          spaceBetween: 20,
                          
                        },
                        "@1.50": {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                      }}
                >
                {
                    portfolioOneData.map((data) => (
                        <SwiperSlide className="single-project-item" key={data.id}>
                            <SRLWrapper>
                               <a href={data.img}>
                               <div className="project-img bg-cover bg-center popup-gallery" style={{backgroundImage: `url(${data.img})`}}>
                                <div className="icon">
                                    <i className="fal fa-plus"></i>
                                </div>
                                </div>
                               </a>
                                <div className="content-text">
                                    <span>{data.category}</span>
                                    <h4><Link to="/projectDetails">{data.title}</Link></h4>
                                    <p>{data.date}</p>
                                </div>
                            </SRLWrapper>
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </div>
        </section>
    )
}

export default PortfolioOne;