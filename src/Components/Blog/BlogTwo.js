import React from 'react'
import blogOneData from "./BlogOneData";
import { Link } from 'react-router-dom';


const BlogTwo = () => {
  return (
    <section className="news-wrapper section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-12 text-center">
                    <div className="block-contents">
                        <div className="section-title">
                            <h5>blog</h5>
                            <span>Our Blog Post</span>
                            <h2>Latest News</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                {
                    blogOneData.map((blog) => (
                        <div className="col-xl-4 col-md-6 col-12" key={blog.id}>
                            <div className="single-blog-card style-1">
                                <div className="blog-featured-img bg-cover bg-center" style={{backgroundImage: `url(${blog.thumb})`}}></div>
                                <div className="contents">
                                    <div className="post-metabar d-flex justify-content-between align-items-center">
                                        <div className="post-author">
                                            <div className="author-img bg-cover bg-center" style={{backgroundImage: `url(${blog.authorImg})`}}></div>
                                            <Link to={blog.btnLink}>{blog.authorName}</Link>
                                        </div>
                                        <div className="post-date">
                                            <i className="fal fa-calendar-alt"></i>
                                            <Link to={blog.btnLink}>{blog.date}</Link>
                                        </div>
                                    </div>
                                    <h3><Link to={blog.btnLink}>{blog.title}</Link></h3>
                                    <Link to={blog.btnLink} className="read-more-link">{blog.btnText}</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            
            </div>
        </div>
    </section>
  )
}

export default BlogTwo