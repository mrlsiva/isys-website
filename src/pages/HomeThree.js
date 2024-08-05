import HeaderThree from "../Components/Header/HeaderThree";
import FooterThree from "../Components/Footer/FooterThree";
import FooterTwo from "../Components/Footer/FooterTwo";
import HeroThree from "../Components/Hero/HeroThree";
import ServicesThree from "../Components/Services/ServicesThree";
import BrandCarouselFour from "../Components/Brands/BrandCarouselFour";
import AboutThree from "../Components/About/AboutThree";
// import CtaTwo from "../Components/Cta/CtaTwo";
import ProfessionalService from '../Components/Services/ProfessionalService'
import TeamFour from "../Components/Team/TeamFour";
import CoreFeaturesOne from "../Components/Features/CoreFeaturesOne";
import PortfolioThree from "../Components/Portfolio/PortfolioThree";
import TestimonialTwo from "../Components/Testimonial/TestimonialTwo";
import BlogThree from "../Components/Blog/BlogThree";
import FooterForm from "../Components/Contact/FooterForm";
import Goals from "../Components/Blog/Goals";


const HomeThree = () => {
    return (
        <>
            <HeaderThree/>
            <HeroThree/>
            <BrandCarouselFour/>
            <ServicesThree/>
            <AboutThree/>
            {/* <CtaTwo/> */}
            {/* <TeamFour/> */}
            <ProfessionalService/>
            <CoreFeaturesOne/>
            {/* <PortfolioThree/> */}
            <TestimonialTwo/>
            {/* <BlogThree/> */}
            <Goals/>
            
            <FooterTwo/>
        </>
    )
}

export default HomeThree;