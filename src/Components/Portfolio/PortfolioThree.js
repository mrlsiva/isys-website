import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import PortfolioThreeData from "./PortfolioThreeData";
import { Link } from "react-router-dom";


const PortfolioThree = () => {
    return (
        <section className="project-showcase-wrapper section-padding pt-0">
            <div className="container">
                <div className="row">
                <div className="col-xl-6 col-lg-8 mb-4 offset-xl-3 offset-lg-2 col-12 text-center">
                    <div className="section-title-3">
                    <h6>Creative Portfolio</h6>
                    <h2>Impressive project showcase</h2>
                    </div>
                </div>
                </div>
            </div>
            <div className="project-showcase-carousel">
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
                        PortfolioThreeData.map((data) => (
                            <SwiperSlide className="single-recent-project bg-cover" style={{backgroundImage: `url(${data.img})`}} key={data.id}>
                                <div className="project-details">
                                    <div className="project-cat">
                                    <span>{data.category}</span>
                                    </div>
                                    <h4><Link to="/projectDetails">{data.title}</Link></h4>
                                    <span>{data.projectDate}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>


    )
}

export default PortfolioThree;