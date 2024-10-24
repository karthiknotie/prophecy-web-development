import React from 'react'
import "../Assets/styles/Blog.css"
import BlogImage from "../Assets/Resources/blogimage.jpeg"

const Blog = () => {
    return (
        <>
            <section className='breadcrumb'>
                <div className="container">
                    <div className="row">
                        <div className="breadcrumb-title">
                            <h1>Thoughts</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi voluptatibus eius reiciendis magnam cum asperiores perferendis at sit consequatur est?</p>
                        </div>
                        <div className="breadcrumb-title-outline">
                            <h1>Thoughts</h1>
                        </div>
                    </div>
                </div>
            </section>


            <section className='blog-section'>
                <div className="container">
                    {/* <div className="sec-title">
                        <h1>Latest Thoughts</h1>
                    </div> */}
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="blog-item">
                                <div className="blog-image">
                                    <img src={BlogImage} alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="date">
                                        <h6>Oct 20, 2024</h6>
                                    </div>
                                    <div className="blog-title">
                                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                                    </div>
                                    <div className="read-more">
                                        <h6>Read More</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-item">
                                <div className="blog-image">
                                    <img src={BlogImage} alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="date">
                                        <h6>Oct 20, 2024</h6>
                                    </div>
                                    <div className="blog-title">
                                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                                    </div>
                                    <div className="read-more">
                                        <h6>Read More</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-item">
                                <div className="blog-image">
                                    <img src={BlogImage} alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="date">
                                        <h6>Oct 20, 2024</h6>
                                    </div>
                                    <div className="blog-title">
                                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                                    </div>
                                    <div className="read-more">
                                        <h6>Read More</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-item">
                                <div className="blog-image">
                                    <img src={BlogImage} alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="date">
                                        <h6>Oct 20, 2024</h6>
                                    </div>
                                    <div className="blog-title">
                                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                                    </div>
                                    <div className="read-more">
                                        <h6>Read More</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-item">
                                <div className="blog-image">
                                    <img src={BlogImage} alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="date">
                                        <h6>Oct 20, 2024</h6>
                                    </div>
                                    <div className="blog-title">
                                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                                    </div>
                                    <div className="read-more">
                                        <h6>Read More</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-item">
                                <div className="blog-image">
                                    <img src={BlogImage} alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="date">
                                        <h6>Oct 20, 2024</h6>
                                    </div>
                                    <div className="blog-title">
                                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                                    </div>
                                    <div className="read-more">
                                        <h6>Read More</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog