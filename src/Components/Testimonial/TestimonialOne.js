import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import testimonialOneData from "./testimonialOneData";


const TestimonialOne = () => {
    return (
        <section className="testimonial-carousel-wrapper section-padding pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 text-center col-12">
                        <div className="block-contents">
                            <div className="section-title">
                                <span>04. Testimonials</span>
                                <h2>What People say about us</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-12">
                        <div className="testimonial-carousel-active">
                            <Swiper  navigation={true} modules={[Navigation]} loop >
                                {
                                    testimonialOneData.map((data) => (
                                        <SwiperSlide className="single-testimonial-item" key={data.id}>
                                            <p>{data.speech}</p>
                                            <div className="client-info">
                                                <h5>{data.name}</h5>
                                                <span>{data.designation}</span>
                                            </div>
                                            <div className="client-img bg-cover bg-center" style={{backgroundImage: `url(${data.img})`}}></div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialOne;