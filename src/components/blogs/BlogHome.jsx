import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./BlogHome.css";
import blogData from "../../assets/data/blogData";
import { Helmet } from "react-helmet";

const BlogHome = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Calculate pagination values
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogData.length / blogsPerPage);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Helmet>
        <title>Blogs- Dr. Apurv Mehra</title>
        <meta
          name="description"
          content="Read more blogs for information & updates by Dr. Apurv Mehra. He is an experienced & well known faculty for medico professionals for career building."
        />
      </Helmet>

      <div className="blogs-main-container">
        {/* Breadcrumb */}
        <div className="blogs-nav">
          <nav className="blogs-breadcrumb">
            <div className="blogs-breadcrumb-content">
              <span>›</span>
              <span>Home</span>
              <span>›</span>
              <span className="blogs-breadcrumb-current">Blogs</span>
            </div>

            <button
              className="blogs-breadcrumb-btn"
              onClick={() => navigate("/")}
            >
              Home
            </button>
          </nav>
        </div>

        <div className="blogs-header">
          <img
            src="https://cdn.dribbble.com/userupload/45840657/file/9e5129db160c35315f62032bcb3478e1.jpg"
            alt="Medical Residents with Dr. Apurv Mehra"
          />
        </div>

        <main className="blogs-inner-container">
          <section className="blogs-grid">
            {currentBlogs.map((data, index) => (
              <article key={index} className="blogs-card">
                <NavLink to={`/blog/${data.id}`}>
                  <div className="blogs-card-images">
                    <img src={data.image} alt={data.alt} />
                  </div>
                  <div className="blogs-card-content">
                    <h1>{data.metaTitle}</h1>
                    <h4>🗓️ {data.blogDate}</h4>
                    <h3>{data.metaDesc}</h3>
                    <p>Read More →</p>
                  </div>
                </NavLink>
              </article>
            ))}
          </section>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="pagination-container">
              <button
                className="pagination-btn"
                onClick={handlePrevious}
                disabled={currentPage === 1}
              >
                ← Previous
              </button>

              <div className="pagination-numbers">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    className={`pagination-number ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                className="pagination-btn"
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                Next →
              </button>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default BlogHome;
