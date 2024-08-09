import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import post1 from '../../assets/img/blog/p1.jpg'
import author1 from '../../assets/img/blog/author_img.jpg';
import ModalVideo from 'react-modal-video';
import Sidebar from './Sidebar';

const NewsWrapper = () => {
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
        <section className="blog-wrapper news-wrapper section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="blog-posts">
                            <div className="single-blog-post">
                                <div className="post-featured-thumb bg-cover" style={{backgroundImage:`url(${post1})`}}></div>
                                <div className="post-content">
                                    <div className="post-cat">
                                        <Link to="/news">BUILDING</Link>
                                    </div>
                                    <h2><Link to="/newsDetails">Dharma Home Suites at Novia offers fully plain
                                        furnished apartments to fit</Link></h2>
                                    <div className="post-meta">
                                        <span><i className="fal fa-comments"></i>35 Comments</span>
                                        <span><i className="fal fa-calendar-alt"></i>24th March 2022</span>
                                    </div>
                                    <p>Thousands of successful projects we are one of the most trusted construction companies. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <div className="d-flex justify-content-between align-items-center mt-30">
                                        <div className="author-info">
                                            <div className="author-img" style={{backgroundImage: `url(${author1})`}}></div>
                                            <h5><a href="#">by Hetmayar</a></h5>
                                        </div>
                                        <div className="post-link">
                                            <Link to="/newsDetails"><i className="fal fa-arrow-right"></i> Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-blog-post">
                                <div className="post-featured-thumb bg-cover" style={{backgroundImage: `url(${post1})`}}></div>
                                <div className="post-content">
                                    <div className="post-cat">
                                        <Link to="#">CONSTRUCTION</Link>
                                    </div>
                                    <h2><Link to="/newsDetails">BUILDING REPAIR & CONSTRUCTION</Link></h2>
                                    <div className="post-meta">
                                        <span><i className="fal fa-comments"></i>35 Comments</span>
                                        <span><i className="fal fa-calendar-alt"></i>17th July 2020</span>
                                    </div>
                                    <p>We commit ourselves to complete all projects within the timeline set with our honorable clients. ex ea commodo consequat. We have a proven record of best result of building and reputable company in the United States.</p>
                                    <div className="d-flex justify-content-between align-items-center mt-30">
                                        <div className="author-info">
                                            <div className="author-img" style={{backgroundImage: `url(${author1})`}}></div>
                                            <h5><a href="#">by Hetmayar</a></h5>
                                        </div>
                                        <div className="post-link">
                                            <Link to="/newsDetails"><i className="fal fa-arrow-right"></i> Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-blog-post format-video video-post">
                                <div className="post-featured-thumb bg-cover" style={{backgroundImage:`url(${post1})`}}>
                                    <div className="video-play-btn">
                                        <span style={{cursor: 'pointer'}} className="play-video popup-video" onClick={() => setOpen(true)}><i className="fas fa-play"></i></span>                     
                                    </div>
                                </div>
                                <div className="post-content">
                                    <div className="post-cat">
                                        <Link to="/news">Engineering</Link>
                                    </div>
                                    <h2><Link to="/newsDetails">Mechanical Engineering and Energy</Link></h2>
                                    <div className="post-meta">
                                        <span><i className="fal fa-comments"></i>35 Comments</span>
                                        <span><i className="fal fa-calendar-alt"></i>12th May 2020</span>
                                    </div>
                                    <p>We have a proven record of best result of building and reputable company in the United States. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <div className="d-flex justify-content-between align-items-center mt-30">
                                        <div className="author-info">
                                            <div className="author-img" style={{backgroundImage: `url(${author1})`}}></div>
                                            <h5><a href="#">by Salman</a></h5>
                                        </div>
                                        <div className="post-link">
                                            <a href="news-details.html"><i className="fal fa-arrow-right"></i> Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-blog-post">
                                <div className="post-featured-thumb bg-cover" style={{backgroundImage: `url(${post1})`}}></div>
                                <div className="post-content">
                                    <div className="post-cat">
                                        <Link to="#">Interior Design</Link>
                                    </div>
                                    <h2><Link to="/newsDetails">best result of building and reputable company</Link></h2>
                                    <div className="post-meta">
                                        <span><i className="fal fa-comments"></i>35 Comments</span>
                                        <span><i className="fal fa-calendar-alt"></i>24th March 2019</span>
                                    </div>
                                    <p>We have a proven record of best result of building and reputable company in the United States. Thousands of successful projects we are one of the most trusted construction companies. We have a proven record of best result of building and reputable company in the United States.</p>
                                    <div className="d-flex justify-content-between align-items-center mt-30">
                                        <div className="author-info">
                                            <div className="author-img" style={{backgroundImage: `url(${author1})`}}></div>
                                            <h5><a href="#">by Hetmayar</a></h5>
                                        </div>
                                        <div className="post-link">
                                            <Link to="/newsDetails"><i className="fal fa-arrow-right"></i> Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-blog-post quote-post format-quote">
                                <div className="post-content text-white bg-cover">
                                    <div className="quote-content">
                                        <div className="icon">
                                            <i className="fas fa-quote-left"></i>
                                        </div>
                                        <div className="quote-text">
                                            <h2>Excepteur sint occaecat cupida tat non proident, sunt in.</h2>
                                            <div className="post-meta">
        
                                                <span><i className="fal fa-comments"></i>35 Comments</span>
                                                <span><i className="fal fa-calendar-alt"></i>24th March 2019</span>
                                            </div>
                                        </div>
                                    </div>                                                                
                                </div>
                            </div>
                        </div>
                        <div className="page-nav-wrap mt-60 text-center">
                            <ul>
                                <li><Link to="#"><i className="fal fa-long-arrow-left"></i></Link></li>
                                <li><Link to="#">01</Link></li>
                                <li><Link to="#">02</Link></li>
                                <li><Link to="#">..</Link></li>
                                <li><Link to="#">10</Link></li>
                                <li><Link to="#">11</Link></li>
                                <li><Link to="#"><i className="fal fa-long-arrow-right"></i></Link></li>
                            </ul>
                        </div> 
                    </div>
                    <Sidebar/>
                </div>
            </div>
        </section>
    </>
   
  )
}

export default NewsWrapper;