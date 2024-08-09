import React from 'react'
import FooterTwo from '../Components/Footer/FooterTwo'
import HeaderOne from '../Components/Header/HeaderOne'
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../Components/PageBanner';
import BrandCarouselThree from "../Components/Brands/BrandCarouselThree";
import FaqOne from "../Components/Faq/FaqOne";
import CtaOne from "../Components/Cta/CtaOne";

const FaqPage = () => {
  return (
    <>
        <HeaderOne/>
        <PageBanner title='FAQ Ask' bannerBg={bannerBg} currentPage='faq' />
        <FaqOne/>
        <CtaOne/>
        <BrandCarouselThree/>
        <FooterTwo/>
    </>
  )
}

export default FaqPage