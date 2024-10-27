import React from 'react'
import "../Assets/styles/Blog.css"
import BlogImage from "../Assets/Resources/blogimage.jpeg"
import { Link } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";
import BlogArrow from "../Assets/Resources/blog-arrow.svg"

const BlogOverview = () => {
    return (
        <>
            <section className='blog-section blog-overview-page'>
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
                                <div className="arrow-shape">
                                    <img src={BlogArrow} alt="" />
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-title">
                                    <div className="row">
                                        <div className="col-lg-10">
                                            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="share">
                                                <button>Share</button>
                                            </div>
                                        </div>
                                    </div>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="blog-overview-content">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quia molestias recusandae libero est, repellendus laborum necessitatibus voluptatum qui sed quis ut doloribus iusto labore iste sint. Obcaecati, cum, labore consequuntur pariatur perspiciatis maxime, libero dolorem enim consectetur nobis vero.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident commodi reprehenderit consequuntur odio numquam suscipit quis modi laudantium, cupiditate quam, perspiciatis exercitationem reiciendis porro, id accusantium illo beatae ipsam. Animi porro commodi deserunt aliquam numquam ipsum repellat expedita nesciunt eveniet cupiditate veniam fugiat illum, saepe hic laborum suscipit quidem earum, unde eius tempora facilis architecto cumque? Quae possimus eos provident.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque omnis maxime, inventore nemo quis non repellendus commodi error dolorem culpa id ea quisquam. Consequuntur dolor totam architecto nobis blanditiis earum.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam velit deleniti temporibus? Ex rem sapiente ut totam quis iste vero, vitae doloremque, esse temporibus porro. Ea ad odit illo veniam architecto. Laboriosam saepe qui vitae, architecto dolor suscipit ea asperiores amet? Sint nostrum neque omnis maxime optio temporibus esse dolor eum laboriosam. A inventore illo provident impedit mollitia aliquid minima, dolores sunt animi eum maiores quidem voluptatum nulla eos non ex quod iste excepturi quaerat perferendis, nam aut ipsam. Impedit?</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque omnis maxime, inventore nemo quis non repellendus commodi error dolorem culpa id ea quisquam. Consequuntur dolor totam architecto nobis blanditiis earum.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="sec-title">
                            <h1>Latest Blogs</h1>
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
            </section>
        </>
    )
}

export default BlogOverview