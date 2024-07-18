import React from 'react'
import FooterTwo from '../Components/Footer/FooterTwo'
import HeaderOne from '../Components/Header/HeaderOne'
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../Components/PageBanner';
import ServicesOne from "../Components/Services/ServicesOne";
import ServicesCta from "../Components/Services/ServicesCta";
import BestFeatures from "../Components/Features/BestFeatures";
import Pricing from "../Components/Price/Pricing";
import FaqOne from "../Components/Faq/FaqOne";

const ServicePage = () => {
  return (
    <>
        <HeaderOne/>
        <PageBanner title='Our Services' bannerBg={bannerBg} currentPage='Service' />
        <ServicesOne/>
        <ServicesCta/>
        <BestFeatures/>
        <Pricing/>
        <FaqOne/>
        <FooterTwo/>
    </>
  )
}

export default ServicePage