import { Link } from 'react-router-dom';
import aboutImg from '../../assets/img/home4/about.jpg';
import { useState } from 'react';
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';

const AboutFour = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="EZ9DrY43wtw"
                onClose={() => setOpen(false)}
            />
            <div className="our-agency-about-wrapper section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <div className="agency-img">
                                <img src={aboutImg} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 ps-xl-5 mt-5 mt-xl-0">
                            <div className="about-agency-content">
                                <div className="section-title-4">
                                    <h2>We're the Best Creative and Digital Agency</h2>
                                    <p>You better believe they are going to shop around until they find what they feel is the best deal. If your business isn’t utilizing the latest technology and as many channels as possible to reach your target audience, you risk not being found in today’s online market.</p>
                                </div>
                                <div className="experience-video-play d-flex">
                                    <div className="year-experience-about d-flex align-items-center">
                                        <div className="year">
                                            <h3>18</h3>
                                        </div>
                                        <div className="text">
                                            <p>Years <br /> Experience</p>
                                        </div>
                                    </div>
                                    <div className="video-popup-btn d-flex align-items-center">
                                        <div className="video-play-btn">
                                            <span className="popup-video" onClick={() => setOpen(true)} style={{cursor: 'pointer'}}><i className="fas fa-play"></i></span>
                                            <span>Watch our activities for your
                                            agency growth</span>                     
                                        </div>
                                    </div>
                                </div>
                                <div className="checked-features-list theme-color-4">
                                    <ul>
                                        <li>Powerful software &amp; tools </li>
                                        <li>Training platform</li>
                                        <li>Knowledge Library</li>
                                    </ul>
                                </div>
                                <Link to='/about' className="theme-btn mt-30 style-4">Read More Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutFour;