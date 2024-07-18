import HeaderFour from "../Components/Header/HeaderFour";
import HeroFour from "../Components/Hero/HeroFour";
import FooterFour from "../Components/Footer/FooterFour";
import AboutFour from "../Components/About/AboutFour";
import ServicesFour from "../Components/Services/ServicesFour";
import BlogFour from "../Components/Blog/BlogFour";
import OurSkill from "../Components/Skills/OurSkill";
import TeamFive from "../Components/Team/TeamFive";
import CtaThree from "../Components/Cta/CtaThree";
import FunFactTwo from "../Components/FunFact/FunFactTwo";
import PortfolioFour from "../Components/Portfolio/PortfolioFour";
import TestimonialTwo from "../Components/Testimonial/TestimonialTwo";
import FaqTwo from "../Components/Faq/FaqTwo";

const HomeFour = () => {
    return (
        <div className="font-oswald">
            <HeaderFour/>
            <HeroFour/>
            <AboutFour/>
            <ServicesFour/>
            <OurSkill/>
            <TeamFive/>
            <PortfolioFour/>
            <TestimonialTwo/>
            <FunFactTwo/>
            <FaqTwo/>
            <CtaThree/>
            <BlogFour/>
            <FooterFour/>
        </div>
    )
}

export default HomeFour;