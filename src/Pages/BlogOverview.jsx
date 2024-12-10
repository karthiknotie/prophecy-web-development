import React, { useMemo, useState, useEffect } from 'react';
import "../Assets/styles/Blog.css";
import { Link, useParams } from 'react-router-dom';
import AllPageLoader from '../Components/AllPageLoader';
import NewBlogImage from "../Assets/Resources/blog-new.webp";
import { useFetchBlogByIdQuery } from '../redux/features/blogs/blogsApi';
import { formatDate } from '../utilis/FormatDate';
import SingleBlog from './SingleBlog';
import RelatedBlog from './RelatedBlog';

const BlogOverview = () => {
    const { id } = useParams(); // Getting blog ID from URL
    const { data: blog, error, isLoading } = useFetchBlogByIdQuery(id); // Fetch the blog by ID

    // Memoize the blog link to avoid unnecessary re-renders
    const blogLink = useMemo(() => `${window.location.origin}/blog/${id}`, [id]);

    // Handle page load for better user experience
    useEffect(() => {
        // Lazy loading images or other media could be handled here
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach((image) => {
            image.setAttribute('src', image.getAttribute('data-src'));
        });
    }, []);

    if (isLoading) return <AllPageLoader />; // Show loader while fetching data
    if (error) return <div>Error fetching blog details.</div>; // Handle errors

    const copyToClipboard = () => {
        navigator.clipboard.writeText(blogLink);
        alert("Link copied to clipboard!"); // Confirmation alert
    };

    return (
        <>
            <section className="breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="breadcrumb-title">
                            <h1 className="ban-title-animation">Blog Overview</h1>
                        </div>
                        <div className="breadcrumb-title-outline">
                            <h1 className='ban-title-animation'>Blog Overview</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-section">
                <div className="container">
                    {/* Lazy Load the SingleBlog component */}
                    {blog && (
                        <React.Suspense fallback={<AllPageLoader />}>
                            <SingleBlog blog={blog} />
                        </React.Suspense>
                    )}
                    <div className="row">
                        <div className="sec-title">
                            <h1>Related Blogs</h1>
                        </div>
                        <React.Suspense fallback={<AllPageLoader />}>
                            <RelatedBlog currentBlogId={id} />
                        </React.Suspense>
                    </div>
                </div>
            </section>

            {/* Share Modal Popup */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable career-modal share-modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Share via</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="share-blog-link">
                                {/* Input field with the blog link */}
                                <div className="input-container">
                                    <input
                                        type="text"
                                        value={blogLink}
                                        readOnly
                                        className="form-control"
                                        id="blogLinkInput"
                                    />
                                    {/* Button to copy the link */}
                                    <button
                                        className="btn btn-primary"
                                        onClick={copyToClipboard}
                                    >
                                        Copy Link
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogOverview;
