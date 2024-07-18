import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import TestimonialTwoData from "./TestimonialTwoData";
import testiImg  from '../../assets/img/home3/testimonial-img.png';

const TestimonialTwo = () => {
    return (
        <section className="testimonial-wrapper section-padding pt-0">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-xl-8 pe-xl-5 col-lg-6 mt-5 mt-lg-0 order-2 order-lg-1">
                    <div className="testimonial-carousel-list me-xl-5">
                        <Swiper  navigation={true} modules={[Navigation]} loop >
                            {
                                TestimonialTwoData.map((data) => (
                                    <SwiperSlide className="single-testimonial-carousel" key={data.id}>
                                        <div className="icon">
                                            <img src={data.img} alt="" />
                                        </div>
                                        <p>{data.speech}</p>
                                        <span><b>{data.name}</b> {data.designation}</span>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 order-1 order-lg-2">
                    <div className="testimonial-img-right">
                        <img src={testiImg} alt="" />
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialTwo;