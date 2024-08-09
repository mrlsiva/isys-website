import { Link } from 'react-router-dom';
import mainLogo from '../../assets/img/logo.png';

const OffsetMenu = ({offset, handleOffset}) => {
    return (
        <>
        <div className={offset? 'offset-menu': 'offset-menu show'}>
            <span onClick={handleOffset} id="offset-menu-close-btn"><i className="fal fa-plus"></i></span>
            <div className="offset-menu-wrapper text-white">
                <div className="offset-menu-header">
                    <div className="offset-menu-logo">
                        <Link to="/homeOne"><img src={mainLogo} alt="logo"/></Link>
                    </div>
                </div> 
                <div className="offset-menu-section">
                    <h3>About Us</h3>
                    <p>We must explain to you how all seds this mistakens idea off denouncing pleasures and praising pain was born and I will give you a completed</p>
                    <Link to="/contact" className="theme-btn  mt-30">Consultation</Link>
                </div>
                <div className="offset-menu-section">
                    <h3>Contact Info</h3>
                    <ul>
                        <li><span><i className="fal fa-map"></i></span>Rock St 12, Newyork City, USA</li>
                        <li><span><i className="fal fa-phone"></i></span>(000) 000-000-0000</li>
                        <li><span><i className="fal fa-envelope"></i></span>info@example.com</li>
                        <li><span><i className="fal fa-clock"></i></span>Week Days: 09.00 to 18.00</li>
                        <li><span><i className="fal fa-clock"></i></span>Sunday: Closed</li>
                    </ul>
                </div> 
                <div className="offset-menu-footer">
                    <div className="offset-menu-social-icon">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-dribbble"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>    
            </div>               
        </div>
        </>
    )
}

export default OffsetMenu;