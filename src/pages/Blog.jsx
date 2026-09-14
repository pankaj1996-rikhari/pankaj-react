import React, { useEffect, useState } from "react";
import blogimg from "../assets/images/hero-blog-image.png";
import futuretechnology from "../assets/images/future-of-technology.webp";
import axios from "axios";
import { Link } from "react-router-dom";

const API = 'https://68a9f782909a5835049b5641.mockapi.io/users/blog';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const res = await axios.get(API);
      setBlogs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="blog-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>Blog</h1>
              <p>
                Our blog offers a window into the world of Vision Infotech,
                where we share expert advice, industry trends, and success
                stories. Stay informed and inspired with our latest posts.
              </p>
              <Link to="/contact" className="btn-get-started mt-4">
                Consult Vision
              </Link>
            </div>
            <div className="col-md-6 text-center blog-image">
              <img src={blogimg} alt="Blog Hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {blogs.map((blog) => (
              <div className="col-md-4" key={blog.id}>
                <div className="card blog-card">
                  <img
                    src={blog.image || futuretechnology}
                    className="card-img-top"
                    alt={blog.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.excerpt}</p>
                    <Link to={`/blog/${blog.id}`} className="btn-get-started">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
