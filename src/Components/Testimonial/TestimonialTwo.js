import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import TestimonialTwoData from "./TestimonialTwoData";
import testiImg  from '../../assets/img/home3/testimonial-img.png';
import './Testimonial.css'
const TestimonialTwo = () => {
    return (
        <section className="testimonial-wrapper section-padding pt-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-6 order-1 order-lg-1">
                        <div className="testimonial-img-right">
                            <img src={testiImg} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-8 pe-xl-5 col-lg-6 mt-5 mt-lg-0 order-2 order-lg-2" style={{ textAlign: "top" }}>
                        <div className="testimonial-carousel-list me-xl-5">
                            <h3>Technology more experts that provides security</h3>
                            <p>Get full cycle development services as per latest technologies, trends and tools. When you choose us as your development partner, rest assured of optimum quality, timely delivery and complete peace-of-mind.</p>
                            <div className="flex">
                                <ul>
                                    <li>Professional team</li>
                                    <li>Technology Consulting</li>
                                    <li>Web App Development</li>
                                    
                                </ul>
                                <ul>
                                    <li>Software Consulting</li>
                                    <li>Mobile App Development</li>
                                    <li>Corporate Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialTwo;