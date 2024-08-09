import { Link } from 'react-router-dom';

const d = new Date();
let currentYear = d.getFullYear();

const FooterOneCopyrights = () => {
    return (
        <div className='footer-bottom'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-12 text-center text-md-start">
                        <div className="copyright-info">
                            <p>&copy; {currentYear} Copyright By <Link to="/">Busico</Link>. All Rights Reserved</p>                            
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="footer-menu mt-3 mt-md-0 text-center text-md-end">
                            <ul>
                                <li><Link to="#">Teams &#38; Conditions</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default FooterOneCopyrights;