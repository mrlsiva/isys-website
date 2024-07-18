import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from '../../assets/img/home4/slide1.jpg';
import { EffectFade } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import 'swiper/css/effect-fade';

// import required modules
import { Pagination } from "swiper";

const HeroFour = () => {
    return (
        <section className="agency-hero-wrapper hero-wrapper fix">
            <Swiper className="agency-slider-active" pagination={true} modules={[Pagination, EffectFade]} effect={"fade"} loop>
                <SwiperSlide>
                    <div className="single-agency-slide bg-cover" style={{backgroundImage: `url(${slide1})`}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-9 col-md-10 col-12">
                                    <div className="hero-contents">
                                        <h1 className="animated-text bg-heading text-white animated">Digital Web Agency</h1>
                                        <Link to='/services' className="theme-btn animated-text animated-btn style-4 mt-30">Explore Services</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-agency-slide bg-cover" style={{backgroundImage: `url(${slide1})`}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-9 col-md-10 col-12">
                                    <div className="hero-contents">
                                        <h1 className="animated-text bg-heading text-white animated">Busico Web Agency</h1>
                                        <Link to='/services' className="theme-btn animated-text animated-btn style-4 mt-30">Explore Services</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="rotate-social-link">
                <a href="#">Facebook</a>
                <a href="#">twitter</a>
                <a href="#">instagram</a>
                <a href="#">linkedin</a>
            </div>
        </section>
    )
}

export default HeroFour;