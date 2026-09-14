import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API = 'https://68a9f782909a5835049b5641.mockapi.io/users/blog';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const getBlog = async () => {
    try {
      const res = await axios.get(`${API}/${id}`);
      setBlog(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBlog();
  }, [id]);

  if (!blog) return <div className="container py-5">Loading...</div>;

  return (
    <div className="container py-5 blog-detail">
      {/* Hero Image */}
      <div className="mb-4">
        <img
          src={blog.image}
          alt={blog.title}
          className="img-fluid rounded shadow-sm"
          style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
        />
      </div>

      {/* Title & Meta */}
      <div className="mb-4">
        <h1 className="fw-bold">{blog.title}</h1>
        <p className="text-muted">
          By <strong>Vision Infotech</strong> | Published on {new Date().toLocaleDateString()}
        </p>
      </div>

      {/* Content */}
      <div style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
