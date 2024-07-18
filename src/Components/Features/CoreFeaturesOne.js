import { Link } from "react-router-dom";
import coreImg1 from '../../assets/img/home3/block1.png';
import coreImg2 from '../../assets/img/home3/block2.png';

const CoreFeaturesOne = () => {
    return (
        <section className="content-block-wrapper section-padding bg-circle fix">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 pe-xl-4 col-12">
                        <div className="content-block-img">
                            <img src={coreImg1} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6 ps-xl-5 col-lg-6 col-12 mt-5 mt-lg-0">
                        <div className="section-title-3">
                            <h6>Core Features</h6>
                            <h2>Designed with the sketch to Figma</h2>
                            <p>The wireless young delinquent get stuffed bugger super what a load of rubbish chimney pot.</p>
                        </div>
                        <div className="checked-features-list style-2">
                            <ul>
                                <li>Brand Identity</li>
                                <li>Website Design &amp; Development</li>
                                <li>SEO &amp; Analytics</li>
                            </ul>
                        </div>
                        <Link to='/about' className="theme-btn style-3 mt-30">click here</Link>
                    </div>
                </div>
                <div className="row align-items-center section-padding pb-0">
                    <div className="col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
                        <div className="section-title-3">
                            <h6>Core Features</h6>
                            <h2>Advanced visual web builder</h2>
                            <p>The wireless young delinquent get stuffed bugger super what a load of rubbish chimney pot.</p>
                        </div>
                        <div className="checked-features-list style-2">
                            <ul>
                                <li>Brand Identity</li>
                                <li>Website Design &amp; Development</li>
                                <li>SEO &amp; Analytics</li>
                            </ul>
                        </div>
                        <Link to='/about' className="theme-btn style-3 mt-30">click here</Link>
                    </div>
                    <div className="col-xl-6 col-lg-6 ps-xl-5 col-12 order-1 order-lg-2">
                        <div className="content-block-img">
                            <img src={coreImg2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoreFeaturesOne;