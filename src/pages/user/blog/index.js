import { useState, useEffect } from 'react';
import BreadCrumb from 'component/BreadCrumb';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios if you're using it for fetching data
import { BsCalendar } from "react-icons/bs";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:3001/blogs');
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    // Function to format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(); // Use toLocaleDateString to format date
    };


    return (
        <>
            <BreadCrumb title="Blogs" />
            <section className="blog spad">
                <div className="container">
                    <div className="row">
                        {blogs.map(blog => (
                            <div className="col-lg-4 col-md-6 col-sm-6" key={blog.id}>
                                <div className="blog__item">
                                    <div className="blog__item__pic set-bg" style={{ backgroundImage: `url(${require('../images/blogs/' + blog.image)})` }}></div>
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
            </section>
        </>
    );
};

export default memo(Blog);
