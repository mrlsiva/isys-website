import React from 'react'
import FooterTwo from '../Components/Footer/FooterTwo'
import HeaderOne from '../Components/Header/HeaderOne'
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../Components/PageBanner';
import TeamOne from "../Components/Team/TeamOne";
import TeamTwo from "../Components/Team/TeamTwo";

const TeamPage = () => {
  return (
    <>
        <HeaderOne/>
        <PageBanner title='Our Team' bannerBg={bannerBg} currentPage='Team' />
        <TeamTwo/>
        <TeamOne/>
        <FooterTwo/>
    </>
  )
}

export default TeamPage