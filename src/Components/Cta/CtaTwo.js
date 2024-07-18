import { Link } from "react-router-dom";
import bannerBg from '../../assets/img/home3/cta-bg.jpg';


const CtaTwo = () => {
    return (
        <section className="cta-promo-wrapper bg-cover" style={{backgroundImage: `url(${bannerBg})`}}>
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-8 text-center text-lg-start col-12 text-white">
                    <div className="cta-heading">
                    <h2 className="mb-0">Looking for we template for your project?</h2>
                    </div>
                </div>
                <div className="col-lg-4 col-12 text-center text-lg-end mt-4 mt-lg-0">
                    <Link to='/contact' className="theme-btn style-3 white">Get a Free Quote</Link>
                </div>
                </div>
            </div>
        </section>
    )
}

export default CtaTwo;