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
                                <h2>The best agency for your business</h2>
                                <p>We have intentionally never developed a stylistic formula for our work, why your projects never quite look or feel the same. Each of our spaces is the result of our ability to listen the agency.</p>
                            </div>
                            <div className="icon-features-item mt-40">
                                <div className="icon">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="content">
                                    <h4>Creative Ideas</h4>
                                    <p>Up the duff bonnet daft amongst bog oxford <br /> creative ideas</p>
                                </div>
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