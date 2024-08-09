import React from 'react'
import FooterTwo from '../Components/Footer/FooterTwo';
import HeaderOne from '../Components/Header/HeaderOne';
import Details from '../Components/News/Details';
import PageBanner from '../Components/PageBanner/index';
import bannerBg from '../assets/img/page-banner.jpg';

const NewsDetails = () => {
  return (
    <>
        <HeaderOne/>
        <PageBanner title='News' bannerBg={bannerBg} currentPage='News Details' />
        <Details/>
        <FooterTwo/>
    </>
  )
}

export default NewsDetails