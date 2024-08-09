import { Link } from "react-router-dom";
import blogFourData from "./BlogFourData";

const BlogFour = () => {
    return (
        <>
            <section className="our-latest-news-wrapper section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8 mb-md-4 offset-xl-3 offset-lg-2 col-12 text-center">
                            <div className="section-title-4">
                                <h2>Read our latest News insights</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    {
                        blogFourData.map((blog) => (
                            <div className="col-xl-4 col-md-6 col-12" key={blog.id}>
                                <div className="latest-news-card">
                                    <div className="post-thumb bg-cover" style={{backgroundImage: `url(${blog.thumb})`}} />
                                    <div className="content">
                                        <div className="post-cat">
                                            <i className="icon-folder" /> <Link to={blog.btnLink}> {blog.catName}</Link>
                                        </div>
                                        <h3><Link to={blog.btnLink}>{blog.title}</Link></h3>
                                        <div className="post-meta d-flex mt-10 align-items-center">
                                            <div className="post-date me-4">
                                                <i className="icon-calendar" /> {blog.date}
                                            </div>
                                            <div className="post-comment">
                                                <i className="icon-chat" /> {blog.comments}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogFour;