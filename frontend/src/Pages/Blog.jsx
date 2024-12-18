import React, { useState } from 'react';
import "../Assets/styles/Blog.css";
import NewBlogImage from "../Assets/Resources/blog-new.webp";
import BlogSearch from '../Components/BlogSearch';
import { useFetchBlogsQuery } from '../redux/features/blogs/blogsApi';
import { formatDate } from '../utilis/FormatDate';

const Blog = () => {
    // Search state
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [query, setQuery] = useState({ search: "", category: "" });

    // Fetch blogs using Redux
    const { data: blogs = [], error, isLoading } = useFetchBlogsQuery(query);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    // Trigger the search
    const handleSearch = () => {
        setQuery({ search, category });
    };

    // Filter blogs based on search term
    const filteredBlogs = blogs.filter((blog) => {
        const titleMatch = blog.title.toLowerCase().includes(search.toLowerCase());
        const categoryMatch = category ? blog.category.toLowerCase() === category.toLowerCase() : true;
        return titleMatch && categoryMatch;
    });

    // Sort blogs by date (latest first)
    const sortedBlogs = [...filteredBlogs].sort((a, b) => new Date(b.date) - new Date(a.date));

    // Extract the latest blog and other blogs
    const latestBlog = sortedBlogs[0];
    const otherBlogs = sortedBlogs.slice(1);

    return (
        <>
            <section className='breadcrumb'>
                <div className="container">
                    <div className="row">
                        <div className="breadcrumb-title">
                            <h1 className='ban-title-animation'>Blogs & Insights</h1>
                        </div>
                        <div className="breadcrumb-title-outline">
                            <h1 className='ban-title-animation'>Blogs & Insights</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className='blog-section'>
                <div className="container">
                    {isLoading && <div>Loading......</div>}
                    {error && <div>{error.toString()}</div>}

                    {latestBlog && (
                        <div className="blog-large">
                            <a href={`/blogs/${latestBlog._id}`}>
                                <div className="blog-image">
                                    <img src={`http://localhost:3000/${latestBlog.coverImg || NewBlogImage}`} alt={latestBlog.title} />
                                    <div className="date">
                                        <h6>{formatDate(latestBlog.createdAt)}</h6>
                                    </div>
                                </div>
                            </a>
                            <div className="blog-content">
                                <div className="blog-title">
                                    <div className="row">
                                        <div className="col-lg-10">
                                            <a href={`/blogs/${latestBlog._id}`}>
                                                <h1>{latestBlog.title}</h1>
                                            </a>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="arrow-shape-right read-more">
                                                <a href={`/blogs/${latestBlog._id}`}><h6>READ MORE</h6></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="search-blog">
                        <BlogSearch
                            search={search}
                            handleSearchChange={handleSearchChange}
                            handleSearch={handleSearch}
                        />
                    </div>

                    {/* Here, display the filtered blogs in the "Latest Blogs" section */}
                    <div className="row">
                        <div className="sec-title">
                            <h1>Latest Blogs</h1>
                        </div>
                        {filteredBlogs.length > 0 ? (
                            filteredBlogs.map(blog => (
                                <div className="col-lg-4" key={blog._id}>
                                    <a
                                        href={`/blogs/${blog._id}`}
                                        style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                                    >
                                        <div className="blog-item">
                                            <div className="blog-image">
                                                <img src={`http://localhost:3000/${blog.coverImg}`} alt="Blog Image" />
                                                <div className="date">
                                                    <h6>{formatDate(blog.createdAt)}</h6>
                                                </div>
                                            </div>
                                            <div className="blog-content">
                                                <div className="blog-title">
                                                    <h1>{blog.title}</h1>
                                                </div>
                                                <div className="read-more">
                                                    <h6>READ MORE</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))
                        ) : (
                            <div>No blogs found</div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
