import React from 'react'
import FooterTwo from '../Components/Footer/FooterTwo'
import HeaderOne from '../Components/Header/HeaderOne'
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../Components/PageBanner';
import Details from '../Components/Services/Details';

const ServiceDetails = () => {
  return (
    <>
        <HeaderOne/>
        <PageBanner title='INTERIOR DESIGN' bannerBg={bannerBg} currentPage='SERVICE DETAILS' />
        <Details/>
        <FooterTwo/>
    </>
  )
}

export default ServiceDetails;