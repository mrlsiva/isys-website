import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import author1 from '../../assets/img/blog/author_img.jpg';
import gallery1 from '../../assets/img/blog/ip1.jpg';
import tagsData from './tagsData';
import categoriesData from './categoriesData';
import feedsData from './feedsData';
import { SRLWrapper } from 'simple-react-lightbox';


const Sidebar = () => {
    const [search, setSearch] = useState('');
  return (
    <div className="col-12 col-lg-4">
        <div className="main-sidebar">
            <div className="single-sidebar-widget author-box-widegts">
                <div className="wid-title">
                    <h3>About Me</h3>
                </div>
                <div className="author-info text-center">
                    <div className="author-img" style={{backgroundImage: `url(${author1})`}}></div>
                    <h4>Rosalina D. Willaimson</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <div className="social-profile">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>Search Objects</h3>
                </div>
                <div className="search_widget">
                    <form action="#">
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search your keyword..."/>
                        <button type="submit"><i className="fal fa-search"></i></button>
                    </form>
                </div>
            </div>
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>Popular Feeds</h3>
                </div>
                <div className="popular-posts">
                    {
                        feedsData.map((data) => (
                            <div className="single-post-item" key={data.id}>
                        <div className="thumb bg-cover" style={{backgroundImage: `url(${data.img})`}}></div>
                        <div className="post-content">
                            <h5><Link to={data.link}>{data.title}</Link></h5>
                            <div className="post-date">
                                <i className="far fa-calendar-alt"></i>2{data.meta}
                            </div>
                        </div>
                    </div>
                        ))
                    }
                </div>
            </div>
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>Categories</h3>
                </div>
                <div className="widget_categories">
                    <ul>
                        {
                            categoriesData.map((data) => (
                                <li key={data.id}><Link to={data.link}>{data.name} <span>{data.number}</span></Link></li>

                            ))
                        } 
                    </ul>                                
                </div>
            </div>
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>Never Miss News</h3>
                </div>
                <div className="social-link">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
            <div className="single-sidebar-widget instagram-widget">
                <div className="wid-title">
                    <h3>Instagram Feeds</h3>
                </div>
                <SRLWrapper>
                    <div className="instagram-gallery">
                        <img src={gallery1} className="single-photo-item bg-cover">                                    
                        </img>
                        <img src={gallery1} className="single-photo-item bg-cover">                                    
                        </img>
                        <img src={gallery1} className="single-photo-item bg-cover">                                    
                        </img>
                        <img src={gallery1} className="single-photo-item bg-cover">                                    
                        </img>
                        <img src={gallery1} className="single-photo-item bg-cover">                                    
                        </img>
                        <img src={gallery1} className="single-photo-item bg-cover">                                    
                        </img>
                    </div>
                </SRLWrapper>
            </div>
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>Popular Tags</h3>
                </div>
                <div className="tagcloud">
                       
                   {
                    tagsData.map((data) => (
                        <Link key={data.id} to={data.link}>{data.label}</Link>  
                    ))
                   }
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar