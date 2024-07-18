import React from 'react'
import BlogThreeData from "./BlogThreeData";
import { Link } from 'react-router-dom';


const BlogThree = () => {
  return (
    <section className="blog-listing-wrapper section-padding pt-0">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-8 mb-4 offset-xl-3 offset-lg-2 col-12 text-center">
                    <div className="section-title-3">
                        <h6>Latest News</h6>
                        <h2>News Insight</h2>
                    </div>
                </div>
            </div>

            <div className="row">
            {
                BlogThreeData.map((blog) => (
                    <div className="col-xl-4 col-md-6 col-12" key={blog.id}>
                        <div className="single-news-card">
                            <div className="post-thumb bg-cover" style={{backgroundImage: `url(${blog.thumb})`}} />
                            <div className="content">
                                <div className="post-meta d-flex mb-10 align-items-center">
                                    <div className="post-date me-4">
                                        <i className="icon-calendar" /> {blog.date}
                                    </div>
                                    <div className="post-comment">
                                        <i className="icon-chat" /> {blog.comments}
                                    </div>
                                </div>
                                <h3><Link to={blog.btnLink}>{blog.title}</Link></h3>
                                <div className="post-btn-link">
                                <Link to={blog.btnLink} className="read-btn">{blog.btnText} <i className="fal fa-long-arrow-right" /></Link>
                                </div>
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

export default BlogThree;