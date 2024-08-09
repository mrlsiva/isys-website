import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from '../../assets/img/home2/hero1.jpg';
import { EffectFade } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import 'swiper/css/effect-fade';


const HeroTwo = () => {
    return (
        <section className="hero-wrapper hero-2">
            <Swiper navigation={true} modules={[Navigation, EffectFade]} effect={"fade"} loop>
                <SwiperSlide className="hero-slider-2">
                    <div className="single-slide bg-cover" style={{backgroundImage: `url(${slide1})`}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 pe-lg-5 col-xxl-7 col-lg-9">
                                    <div className="hero-contents pe-lg-3">
                                        <h1 className="wow fadeInLeft animated" data-wow-duration="1.3s">we build Your Dream</h1>
                                        <p className="pe-lg-5 wow fadeInLeft animated" data-wow-duration="1.3s" data-wow-delay=".4s">Busico is a construction and architecture environmentally most responsible for any kinds of themes.</p>
                                        <Link to="/contact" className="theme-btn me-sm-4 wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".8s">contact us</Link>
                                        <Link to="/projects" className="theme-btn wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".6s">our portfolio</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="hero-slider-2">
                    <div className="single-slide bg-cover" style={{backgroundImage: `url(${slide1})`}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 pe-lg-5 col-xxl-7 col-lg-9">
                                    <div className="hero-contents pe-lg-3">
                                        <h1 className="wow fadeInLeft animated" data-wow-duration="1.3s">we make Dream home</h1>
                                        <p className="pe-lg-5 wow fadeInLeft animated" data-wow-duration="1.3s" data-wow-delay=".4s">Busico is a construction and architecture environmentally most responsible for any kinds of themes.</p>
                                        <Link to="/contact" className="theme-btn me-sm-4 wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".8s">contact us</Link>
                                        <Link to="/projects" className="theme-btn wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".6s">our portfolio</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default HeroTwo;