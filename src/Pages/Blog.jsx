import React from 'react'
import "../Assets/styles/Blog.css"
import BlogImage from "../Assets/Resources/blogimage.jpeg"
import { Link } from 'react-router-dom'
import BlogArrow from "../Assets/Resources/blog-arrow.svg"

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
                        <div className="blog-item blog-detail">
                            <div className="blog-image">
                                <img src={BlogImage} alt="" />
                                <div className="date">
                                    <h6>Oct 20, 2024</h6>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-title">
                                    <div className="row">
                                        <div className="col-lg-10">
                                            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="arrow-shape-right">
                                                <img src={BlogArrow} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <p style={{ marginTop: "20px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nostrum minus ad aut placeat labore, ea tenetur tempora quisquam? Illo expedita eligendi, ex impedit delectus ipsum est doloribus in numquam.</p>
                                </div>
                                <div className="read-more">
                                    <Link to="/blog-overview"><h6>Read More</h6></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="blog-item">
                                <div className="blog-image">
                                    <img src={BlogImage} alt="" />
                                    <div className="date">
                                        <h6>Oct 20, 2024</h6>
                                    </div>
                                </div>
                                <div className="blog-content">
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
                                    <div className="date">
                                        <h6>Oct 20, 2024</h6>
                                    </div>
                                </div>
                                <div className="blog-content">
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
                                    <div className="date">
                                        <h6>Oct 20, 2024</h6>
                                    </div>
                                </div>
                                <div className="blog-content">
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
                                    <div className="date">
                                        <h6>Oct 20, 2024</h6>
                                    </div>
                                </div>
                                <div className="blog-content">
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
                                    <div className="date">
                                        <h6>Oct 20, 2024</h6>
                                    </div>
                                </div>
                                <div className="blog-content">
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
                                    <div className="date">
                                        <h6>Oct 20, 2024</h6>
                                    </div>
                                </div>
                                <div className="blog-content">
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
            </section >
        </>
    )
}

export default Blog