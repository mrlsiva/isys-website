import { Link } from 'react-router-dom';
import aboutImg from '../../assets/img/home3/about.jpg';
import img1 from '../../assets/img/home3/about-element.png';
import img2 from '../../assets/img/home3/idea.png';


const AboutThree = () => {

    return (
        <>
            <section className="about-our-agency section-padding fix">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 pe-xl-5 ps-xl-5 col-12">
                            <div className="about-company-img">
                                <img src={aboutImg} alt="" />
                                <img src={img1} className="about-element" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0">
                            <div className="section-title-3">
                                <h6>About Company</h6>
                                <p><span className='text-primary'>Isys Technologies</span> is a software development and consulting company focusing on web, mobile, 
                                   desktop and embedded software solutions, we have been bringing digital transformation to mid-sized and large enterprises in Banking and Finance,
                                   Insurance, Telecommunications, Healthcare and Retail. Our key domains include enterprise software, e-commerce, BI and Big Data, e-learning and IoT.
                                   We pride ourselves in providing creative and flexible out of the box solutions. 
                                   All the deliverables are high-end systems built using latest technologies and are available at very reasonable prices compared to other competitors in the market. Right from the pre-sale’s questions to deployment and maintenance, the company’s young and spirited professionals collaborate well with the client to offer an overall amazing experience.</p>
                            </div>
                            <div className="icon-features-item mt-40">
                            
                                {/* <div className="content">
                                    <h4>Creative Ideas</h4>
                                    <p>Up the duff bonnet daft amongst bog oxford <br /> creative ideas</p>
                                </div> */}
                            </div>
                            <Link to='/about' className="theme-btn style-3 mt-30">Discover Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutThree;