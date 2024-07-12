import React from 'react';
import '../../stylesheets/style.css'
import imglogo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
      {/* Desktop Header */}
      <header id="header" className="header header-default header-fixed">
        <div className="sticky-area-wrap">
          <div className="inner-header">
            <div className="header-wrap">
              <div className="header-ct-left">
                <div id="logo" className="logo">
                  <a href="index.html">
                    <img className="site-logo" src={imglogo} alt="Image" />
                  </a>
                </div>
              </div>
              <div className="header-ct-center">
                <div className="nav-wrap">
                  <nav id="mainnav" className="mainnav" role="navigation">
                    <ul id="menu-primary-menu" className="menu">
                      <li className="menu-item current-menu-item">
                        <a href="/">Home<span></span></a>
                      </li>
                      <li className="menu-item">
                        <a href="/Service">Services<span></span></a>
                      </li>
                      <li className="menu-item">
                        <a href="/Career">Career<span></span></a>
                      </li>
                      <li className="menu-item">
                        <a href="/About">About Us<span></span></a>
                      </li>
                      <li className="menu-item">
                        <a href="/Contact">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-ct-right">
                <div className="header-customize-item show-search">
                  <a className="icon-show-search" href="#"><span className="icon-search"></span></a>
                  <div className="submenu top-search widget_search">
                    <form role="search" method="get" className="search-form">
                      <div className="input-group">
                        <input type="search" placeholder="Search…" required />
                        <button type="submit" className="search-submit"><span className="icon-search"></span></button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="header-customize-item header-btn">
                  <a className="widget-button" href="contact-us.html"><span className="icon-calling"></span> Get in touch</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="header-mobile" id="header-mobile">
        <div className="inner-header">
          <div className="header-wrap">
            <div className="header-ct-left">
              <div id="logo-mobi" className="logo">
                <a href="index.html" rel="home" className="main-logo">
                  <img src="../assets/logo.png" alt="Image" />
                </a>
              </div>
            </div>
            <div className="header-ct-right">
              <div className="btn-menu">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="canvas-nav-wrap">
          <div className="overlay-canvas-nav"></div>
          <div className="inner-canvas-nav">
            <div id="logo-menu-mobi" className="logo">
              <a href="index.html" rel="home" className="main-logo">
                <img src="images/logo.png" alt="Image" />
              </a>
            </div>
            <nav id="mainnav_canvas" className="mainnav_canvas" role="navigation">
              <ul id="menu-primary-menu" className="menu">
                <li className="menu-item current-menu-item">
                  <a href="#">Home<span></span></a>
                </li>
                <li className="menu-item">
                  <a href="services-detail-1.html">Services<span></span></a>
                </li>
                <li className="menu-item">
                  <a href="#">Portfolio<span></span></a>
                </li>
                <li className="menu-item">
                  <a href="about-us.html">About Us<span></span></a>
                </li>
                <li className="menu-item">
                  <a href="contact-us.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
