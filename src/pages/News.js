import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import PageBanner from '../Components/PageBanner'
import bannerBg from '../assets/img/page-banner.jpg';
import FooterTwo from '../Components/Footer/FooterTwo';
import NewsWrapper from '../Components/News';

const News = () => {
  return (
    <>
      <HeaderOne/>
      <PageBanner title='News' bannerBg={bannerBg} currentPage='News' />
      <NewsWrapper/>
      <FooterTwo/>
    </>
  )
}

export default News