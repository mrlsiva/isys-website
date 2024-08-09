import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import brandCarouselOneData from "./BrandCarouselOneData";


const BrandCarouselFour = () => {
  return (
        <section className="our-brand-showcase section-padding pt-0">
            <div className="container text-center">
                <h5>Trusted by world's <b>5k+</b> business class brands</h5>
                <div className="brand-carousel-2 mt-5">
                <Swiper
                        slidesPerView={5} 
                        spaceBetween={20} 
                        loop
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 2,
                                spaceBetween: 40,
                                
                            },
                            "@0.75": {
                                slidesPerView: 3,
                                spaceBetween: 40,
                                
                            },
                            "@1.00": {
                                slidesPerView: 4,
                                spaceBetween: 40,
                                
                            },
                            "@1.50": {
                                slidesPerView: 5,
                                spaceBetween: 40,
                            },
                            }}
                    >
                        {
                            brandCarouselOneData.map((data) =>(
                                <SwiperSlide className="single-brand-logo" key={data.id}>
                                <img src={data.brand} alt={data.name}/>
                            </SwiperSlide>
                            ))
                        }
                                
                    </Swiper>
                </div>
            </div>
        </section>
  )
}

export default BrandCarouselFour