import React from 'react'
import FooterTwo from '../Components/Footer/FooterTwo'
import HeaderOne from '../Components/Header/HeaderOne'
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../Components/PageBanner';
import BrandCarouselThree from "../Components/Brands/BrandCarouselThree";
import Pricing from "../Components/Price/Pricing";
import TestimonialOne from '../Components/Testimonial/TestimonialOne';

const PricingPage = () => {
  return (
    <>
        <HeaderOne/>
        <PageBanner title='Plan Price' bannerBg={bannerBg} currentPage='price' />
        <Pricing/>
        <TestimonialOne/>
        <BrandCarouselThree/>
        <FooterTwo/>
    </>
  )
}

export default PricingPage