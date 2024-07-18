import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/img/blog/post-inner.jpg';
import img2 from '../../assets/img/blog/p1.jpg';
import post1 from '../../assets/img/home2/s2.jpg';
import post2 from '../../assets/img/home2/s2.jpg';
import author1 from '../../assets/img/blog/author_img.jpg'
import author2 from '../../assets/img/blog/author2.jpg';
import CommentForm from './CommentForm';
import Sidebar from './Sidebar';


const Details = () => {
  return (
    <section className="blog-wrapper news-wrapper section-padding">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-8">
                    <div className="blog-post-details border-wrap">
                        <div className="single-blog-post post-details">                            
                            <div className="post-content">
                                <div className="post-cat">
                                    <Link to="#">BUILDING</Link>
                                </div>
                                <h2>Dharma Home Suites at Novia offers fully plain
                                    furnished apartments to fit</h2>
                                <div className="post-meta">
                                    <span><i className="fal fa-comments"></i>35 Comments</span>
                                    <span><i className="fal fa-calendar-alt"></i>24th March 2019</span>
                                </div>

                                <p>We have a proven record of best result of building and reputable company in the United States. Thousands of successful projects we are one of the most trusted construction companies. We have a proven record of best result of building and reputable company in the United States.</p>
                                <p>Northern anchovy–bass yellowtail barracuda zander yellowfin grouper gurnard skipjack tuna shark burrowing goby eulachon wobbegong. Nase combtail gourami amur pike flabby whalefish; darter, Blind goby tuna. Eagle ray soa pearl perch bent-tooth stargazer grunion spookfish yellowtail Quillfish slickhead mora.  snake worm mackerel sockeye salmon banjo catfish toadfish sauger four-eyed fish</p>
                                <img src={img2} alt=""/>
                                <h3>BUILDING REPAIR & CONSTRUCTION</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <blockquote>
                                    Thousands of successful projects we are one of the most trusted construction companies.
                                </blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute.</p>
    
                                <ul>
                                    <li>We track every dollar</li>
                                    <li>We’re an open book</li>
                                    <li>100% goes to the field</li>
                                    <li>Received the highest grades</li>
                                </ul>                                
                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus</p>
                                <img className="alignleft" src={img1} alt=""/>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                                
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                        <div className="row tag-share-wrap">
                            <div className="col-lg-8 col-12">
                                <h4>Releted Tags</h4>
                                <div className="tagcloud">                                   
                                    <Link to="/newsDetails">CONSTRUCTION</Link>
                                    <Link to="/newsDetails">REPAIR</Link>
                                    <Link to="/newsDetails">BUILDING</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                                <h4>Social Share</h4>
                                <div className="social-share">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>                                    
                                </div>
                            </div>
                        </div>
    
                        <div className="related-post-wrap">
                            <h3>Releted Post</h3>
    
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="single-related-post">
                                        <div className="featured-thumb bg-cover" style={{backgroundImage: `url(${post1})`}}></div>
                                        <div className="post-content">
                                            <div className="post-date">
                                                <span><i className="fal fa-calendar-alt"></i>27th March 2022</span>
                                            </div>
                                            <h4><a href="news-details.html">BUILDING REPAIR & CONSTRUCTION</a></h4>
                                            <p>We commit ourselves to complete all projects within the timeline set with our honorable clients.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="single-related-post">
                                        <div className="featured-thumb bg-cover" style={{backgroundImage: `url(${post2})`}}></div>
                                        <div className="post-content">
                                            <div className="post-date">
                                                <span><i className="fal fa-calendar-alt"></i>24th July 2020</span>
                                            </div>
                                            <h4><Link to="/newsDetails">Any Kind project Planning.</Link></h4>
                                            <p>Thousands of successful projects we are one of the most trusted construction companies.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                        <div className="comments-section-wrap pt-40">
                            <div className="comments-heading">
                                <h3>03 Comments</h3>
                            </div>
                            <ul className="comments-item-list">
                                <li className="single-comment-item">
                                    <div className="author-img">
                                        <img src={author1} alt=""/>
                                    </div>
                                    <div className="author-info-comment">
                                        <div className="info">
                                            <h5><a href="#">Rosalina Kelian</a></h5>
                                            <span>19th May 2018</span>
                                            <a href="#" className="theme-btn minimal-btn"><i className="fal fa-reply"></i>Reply</a>
                                        </div>
                                        <div className="comment-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud  laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="single-comment-item">
                                    <div className="author-img">
                                        <img src={author2} alt=""/>
                                    </div>
                                    <div className="author-info-comment">
                                        <div className="info">
                                            <h5><a href="#">Arista Williamson</a></h5>
                                            <span>21th Feb 2020</span>
                                            <a href="#" className="theme-btn minimal-btn"><i className="fal fa-reply"></i>Reply</a>
                                        </div>
                                        <div className="comment-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
    
                                    <ul className="replay-comment">
                                        <li className="single-comment-item">
                                            <div className="author-img">
                                                <img src={author1} alt=""/>
                                            </div>
                                            <div className="author-info-comment">
                                                <div className="info">
                                                    <h5><a href="#">Salman Ahmed</a></h5>
                                                    <span>29th Jan 2022</span>
                                                    <a href="#" className="theme-btn minimal-btn"><i className="fal fa-reply"></i>Reply</a>
                                                </div>
                                                <div className="comment-text">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
    
                        <div className="comment-form-wrap mt-40">
                            <h3>Post Comment</h3>
                            <CommentForm/>
                        </div>
                        
                    </div>
                </div>
                <Sidebar/>
            </div>
        </div>
    </section>
  )
}

export default Details