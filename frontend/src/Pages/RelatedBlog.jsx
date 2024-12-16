import React, { useEffect } from 'react';
import BlogImage from "../Assets/Resources/blogimage.jpeg"
import { Link, useParams } from 'react-router-dom'
import { useFetchRelatedBlogsQuery } from '../redux/features/blogs/blogsApi';
import { formatDate } from '../utilis/FormatDate';

const RelatedBlog = () => {
    const { id } = useParams();
    const { data: blogs = [], error, isLoading } = useFetchRelatedBlogsQuery(id);
    console.log(blogs)

    return (
        <section className='blog-section blog-overview-page'>
            <div className="container">
                <div className="row">


                    {
                        blogs.length > 0 ?
                            (<div className='row'>
                                {
                                    blogs.map((blog) => (
                                        <div className="col-lg-4">
                                            <a href={`/blogs/${blog._id}`}>
                                                <div className="blog-item" data-aos="zoom-in" data-aos-duration="1000">
                                                    <div className="blog-image">
                                                        <img src={blog.coverImg} alt="" />
                                                        <div className="date">
                                                            <h6>{formatDate(blog.createdAt)}</h6>
                                                        </div>
                                                    </div>
                                                    <div className="blog-content">
                                                        <div className="blog-title">
                                                            <h1>{blog?.title.substring(0, 30)}</h1>
                                                            <p>{blog?.description.substring(0, 40)}</p>
                                                        </div>
                                                        <div className="read-more">
                                                            <Link to="/blog-overview"><h6>READ MORE</h6></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    ))
                                }
                            </div>) : (<div style={{ color: "#fff" }}>No Related Blogs Found !!</div>)
                    }
                </div>
            </div>
        </section >
    )
}

export default RelatedBlog