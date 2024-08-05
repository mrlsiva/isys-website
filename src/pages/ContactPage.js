import React from 'react'
import FooterTwo from '../Components/Footer/FooterTwo'
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../Components/PageBanner';
import BrandCarouselThree from "../Components/Brands/BrandCarouselThree";
import ContactPageContents from "../Components/Contact/ContactPageContents";
import HeaderThree from '../Components/Header/HeaderThree';

const ContactPage = () => {
  return (
    <>
        <HeaderThree/>
        <PageBanner title='Contact Us' bannerBg={bannerBg} currentPage='contact' />
        <ContactPageContents/>
        <BrandCarouselThree/>
        <FooterTwo/>
    </>
  )
}

export default ContactPage;
