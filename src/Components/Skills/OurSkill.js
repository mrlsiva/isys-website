import React from 'react'
import brand from '../../assets/img/home4/brand.jpg';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import brandCarouselOneData from "../Brands/BrandCarouselOneData";

const OurSkill = () => {
    const percentage1 = 94;
    const percentage2 = 88;

  return (
    <section className="we-work-skill-wrapper section-padding">
        <div className="container">
        <div className="row">
            <div className="col-xl-6 col-lg-8 mb-4 offset-xl-3 offset-lg-2 col-12 text-lg-center">
                <div className="section-title-4">
                    <h2>We Work For Brands And 
                        Show Creativity
                    </h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-7 col-xl-6 mt-lg-4">
            <div className="our-achievement-skill-wrapper">
                <ul>
                    <li>Skills</li>
                    <li>Experience</li>
                    <li>Creativity</li>
                </ul>
                <p className="border-left">Completely synergize resource for the taxing relationships via premier niche marketplace. Professionally agency service with dynamic innovative ideas with our global customers.</p>
                <div className="skill-circle-progress-wrapper row">
                    <div className="col-sm-6">
                        <div className="single-skill-circle-bar mt-30">
                                <CircularProgressbar className='d-inline-block' value={percentage1} text={`${percentage1}%`}
                                    styles={{
                                        // Customize the circle behind the path, i.e. the "total progress"
                                        trail: {
                                          // Trail color
                                          stroke: '#f7f7f7',
                                        },
                                        path: {
                                            // Path color
                                            stroke: `rgba(255, 187, 0, ${percentage1 / 100})`,
                                        },
                                        text: {
                                            fill: '#FFBB00',
                                        },
                                    }}
                                />
                                <div className="contents mt-4 ms-3 d-inline-block">
                                    <h6>Quality Service
                                        <br /> Provide
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-skill-circle-bar mt-30">
                                    <CircularProgressbar className='d-inline-block' value={percentage2} text={`${percentage2}%`}
                                         styles={{
                                            // Customize the circle behind the path, i.e. the "total progress"
                                            trail: {
                                              // Trail color
                                              stroke: '#f7f7f7',
                                            },
                                            path: {
                                                // Path color
                                                stroke: `rgba(255, 187, 0, ${percentage2 / 100})`,
                                            },
                                            text: {
                                                fill: '#FFBB00',
                                            },
                                        }}
                                    />
                                    <div className="contents mt-4 ms-3 d-inline-block">
                                        <h6>Skilled and
                                            <br/> Experienced Team
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="global-client-carousel mt-5">
                            <div className="global-title">
                                <h4>Global Clients</h4>
                            </div>
                            <div className="global-carousel mt-4">
                                <Swiper
                                    slidesPerView={4} 
                                    spaceBetween={30} 
                                    loop
                                    breakpoints={{
                                        "@0.00": {
                                            slidesPerView: 2,
                                            
                                        },
                                        "@0.75": {
                                            slidesPerView: 3,
                                            
                                        },
                                        "@1.00": {
                                            slidesPerView: 3,
                                            
                                        },
                                        "@1.50": {
                                            slidesPerView: 4,
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
                    </div>
                </div>
                <div className="col-xl-5 mt-5 col-md-5 offset-xl-1 mt-lg-4">
                    <div className="brand-client-img">
                        <img src={brand} alt="" />
                        <div className="company-year">
                            <p>Since</p>
                            <h2>2018</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default OurSkill;