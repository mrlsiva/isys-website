import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from '../../assets/img/home1/slide1.jpg';

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


const HeroOne = () => {
    return (
        <section className="hero-wrapper hero-1">
        <Swiper navigation={true} modules={[Navigation]} loop>
            <SwiperSlide className=" bg-cover" style={{backgroundImage: `url(${slide1})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 ps-md-5 pe-md-5 col-xxl-7 col-lg-8 col-md-8 col-sm-10">
                            <div className="hero-contents pe-lg-3">
                                <h1 className="fs-lg wow fadeInLeft animated" data-wow-duration="1.3s">we build Your Dream</h1>
                                <p className="pe-lg-5 wow fadeInLeft animated" data-wow-duration="1.3s" data-wow-delay=".4s">Busico is a construction and architecture environmentally most responsible for any kinds of themes.</p>
                                <a href="contact.html" className="theme-btn me-sm-4 wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".8s">contact us</a>
                                <a href="about.html" className="plus-text-btn wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".6s">
                                    <div className="icon">
                                        <i className="fas fa-plus"></i>
                                    </div>
                                    <div className="link-text">
                                        <span>Explore</span> More about Us
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className=" bg-cover" style={{backgroundImage: `url(${slide1})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 ps-md-5 pe-md-5 col-xxl-7 col-lg-8 col-md-8 col-sm-10">
                            <div className="hero-contents pe-lg-3">
                                <h1 className="fs-lg wow fadeInLeft animated" data-wow-duration="1.3s">we build Your Dream</h1>
                                <p className="pe-lg-5 wow fadeInLeft animated" data-wow-duration="1.3s" data-wow-delay=".4s">Busico is a construction and architecture environmentally most responsible for any kinds of themes.</p>
                                <a href="contact.html" className="theme-btn me-sm-4 wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".8s">contact us</a>
                                <a href="about.html" className="plus-text-btn wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".6s">
                                    <div className="icon">
                                        <i className="fas fa-plus"></i>
                                    </div>
                                    <div className="link-text">
                                        <span>Explore</span> More about Us
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
    )
}

export default HeroOne;