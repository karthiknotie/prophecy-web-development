import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchBlogByIdQuery } from '../redux/features/blogs/blogsApi';
import { formatDate } from '../utilis/FormatDate';

const SingleBlog = () => {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetchBlogByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.toString()}</div>;

  return (

    <>

      <section className='blog-section blog-overview-page'>
        <div className="container">
          {/* <div className="sec-title">
            <h1>Latest Thoughts</h1>
        </div> */}
          <div className="row">
            <div className="blog-large">
              <div className="blog-image" data-aos="zoom-in" data-aos-duration="1000">
                <img src={`http://localhost:5000/${blog.coverImg}`} alt="" />
                <div className="date" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
                  <h6>{formatDate(blog.createdAt)}</h6>
                </div>
                <a href="/blog">
                  <div className="arrow-shape read-more" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
                    <h6>BACK</h6>
                  </div>
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-title">
                  <div className="row">
                    <div className="col-lg-10">
                      <h1 data-aos="fade-right" data-aos-duration="1000">{blog.title}</h1>
                    </div>
                    <div className="col-lg-2">
                      <div className="share" data-aos="fade-left" data-aos-duration="1000" >
                        <button data-bs-toggle="modal" data-bs-target="#staticBackdrop">Share</button>
                      </div>
                    </div>
                  </div>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="blog-overview-content">
              <p style={{ fontStyle: "italic" }}>{blog.description}</p>
              <p className='para-animation' dangerouslySetInnerHTML={{ __html: blog.content }}></p>
            </div>
          </div>
        </div>
      </section >


    </>

  );
};

export default SingleBlog;
