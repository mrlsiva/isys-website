import React from 'react'
import FooterTwo from '../Components/Footer/FooterTwo'
import HeaderOne from '../Components/Header/HeaderOne'
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../Components/PageBanner';
import PortfolioOne from "../Components/Portfolio/PortfolioOne";
import PortfolioTwo from "../Components/Portfolio/PortfolioTwo";
import BrandCarouselThree from "../Components/Brands/BrandCarouselThree";

const ProjectPage = () => {
  return (
    <>
        <HeaderOne/>
        <PageBanner title='PORTFOLIO' bannerBg={bannerBg} currentPage='project' />
        <PortfolioOne/>
        <PortfolioTwo/>
        <BrandCarouselThree/>
        <FooterTwo/>
    </>
  )
}

export default ProjectPage;