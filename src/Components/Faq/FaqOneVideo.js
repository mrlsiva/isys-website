import faqVideoBg from '../../assets/img/faq-bg.jpg';
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';
import { useState } from 'react';


const FaqOneVideo = () => {
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
            <div className="video-popup-wrapper d-flex justify-content-center align-items-center bg-cover bg-center" style={{backgroundImage: `url(${faqVideoBg})`}}>
                <div className="video-play-btn">
                    <span onClick={() => setOpen(true)} className="popup-video play-video" style={{cursor: 'pointer'}}><i className="fas fa-play"></i></span>                     
                </div>
            </div>
            <div className="box-cta-call d-flex align-items-center justify-content-between">
                <div className="icon">
                    <i className="flaticon-24-hours"></i>
                </div>
                <div className="content-text">
                    <span>Call for support</span>
                    <h3>(555) 548 201 520</h3>
                </div>
            </div>
        </>
    )
}

export default FaqOneVideo;