import { useState, useEffect } from "react";
import BreadCrumb from "component/BreadCrumb";
import { memo } from "react";
import axios from "axios";
import PaginationBlogs from "component/PaginationBlog";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3001/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <>
      <BreadCrumb title="Blogs" />
      <section className="blog spad">
        <div className="container">
          <div className="row">
            <PaginationBlogs />
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Blog);
