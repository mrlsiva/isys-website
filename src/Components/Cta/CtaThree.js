import { Link } from "react-router-dom";
import bannerBg from '../../assets/img/home4/promo-banner-bg.jpg';

const CtaThree = () => {
    return (
        <section className="promo-banner-cta section-padding bg-overlay bg-cover" style={{backgroundImage: `url(${bannerBg})`}}>
            <div className="container">
                <div className="row">
                <div className="col-12 text-center">
                    <h2 className="text-white">Want to grow your startup business? <br />
                    Feel free to contact us</h2>
                    <Link to='/contact' className="theme-btn style-4"><i className="icon-inbox" /> Contact Us</Link>
                </div>
                </div>
            </div>
        </section>
    )
}

export default CtaThree;

