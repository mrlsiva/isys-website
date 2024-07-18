import React, { useState } from 'react'
import HeaderTwoTop from './HeaderTwoTop'
import mainLogo from '../../assets/img/logo-color.png';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const HeaderTwo = () => {
    const [search, setSearch] = useState(true);
    const [mobileMenu, setMobileMenu] = useState(true);

    const handleSearch = () => {
        setSearch(!search);
    }

    const handleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
      }

  return (
    <header className="header-wrap header-2">
       <HeaderTwoTop/>
        <div className="main-header-wrapper">
            <div className="container-fluid align-items-center justify-content-between d-flex">
                <div className="logo">
                    <Link to="/"><img src={mainLogo} alt="logo"/></Link>
                </div>
                <div className="main-menu d-none d-lg-block">
                    <ul>
                        <li><Link to="/index">Home <i className="fal fa-plus"></i></Link>
                            <ul className="sub-menu">
                                <li><Link to="/">homepage 1</Link></li>
                                <li><Link to="/homeTwo">homepage 2</Link></li>
                                <li><Link to="/homeThree">homepage 3</Link></li>
                                <li><Link to="/homeFour">homepage 4</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/about">about</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="#">Pages <i className="fal fa-plus"></i></Link>
                            <ul className="sub-menu">
                                <li><Link to="/team">team</Link></li>
                                <li><Link to="/faq">faq</Link></li>
                                <li><Link to="/projects">projects</Link></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="d-inline-block d-lg-none">
                    <div className="mobile-nav-wrap">                    
                        <div id="hamburger" onClick={handleMobileMenu}>
                            <i className="fal fa-bars"></i>
                        </div>
                       <MobileMenu mobileMenu={mobileMenu} handleMobileMenu={handleMobileMenu} />
                    </div>
                    <div className="overlay"></div>
                </div>
                <div className="right-elements d-none d-xl-flex d-flex align-items-center">
                    <div className="search-icon">
                        <span className="search-btn" onClick={handleSearch} style={{cursor: 'pointer'}}><i className="fas fa-search"></i></span>
                        <div className={search ? 'search-box' : 'search-box show'}>
                            <form action="#">
                                <input type="text" placeholder="Search"/>
                                <button type="submit"><i className="fal fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                    <div className="call-action">
                        <span>Call For Support</span>
                        <p>+5 282 350 360</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default HeaderTwo