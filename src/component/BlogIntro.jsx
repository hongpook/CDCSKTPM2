import React, { useState, useEffect } from "react";
import { BsCalendar } from "react-icons/bs";
import { Link } from "react-router-dom";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// Function to format date
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Use toLocaleDateString to format date
};
function BlogIntro() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/blogs") // Change the URL to your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setBlogs(shuffleArray(data)); // Shuffle the products array
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []); // Fetch products whenever the value changes (tab changes)

 
  return (
    <div className="App" >
      
      <div >
          
                <div className="row">
                  {blogs.slice(0, 3).map((blog) => (
                    <div className="col-lg-4 col-md-6 col-sm-6" key={blog.id}>
                        <div className="blog__item">
                            <div className="blog__item__pic set-bg" style={{ backgroundImage: `url(${require('../pages/user/images/blogs/' + blog.image)})` }}></div>
                            <div className="blog__item__text">
                                <span><BsCalendar/> {formatDate(blog.created_at)}</span>
                                <h5>{blog.name}</h5>
                                <Link  to={`/blogs/${blog.id}`}>Read More</Link>
                            </div>
                        </div>
                    </div>
                  ))}
                </div>
      </div>
    </div>
  );
}

export default BlogIntro;
