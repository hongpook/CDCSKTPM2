import React, { useState } from 'react';
import axios from 'axios';

const PostBlogForm = () => {
  const [blogPostData, setBlogPostData] = useState({
    name: '',
    image: '',
    author_name: '',
    content: '',
    views: 0, // Initialize views to 0
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Sanitize input data (optional)
    const sanitizedData = {
      name: blogPostData.name.trim(),
      image: blogPostData.image.trim(),
      author_name: blogPostData.author_name.trim(),
      content: blogPostData.content.trim(),
      views: blogPostData.views,
    };

    try {
      const response = await axios.post('http://localhost:3001/blogs', sanitizedData); // Replace with your actual API endpoint

      if (!response.ok) {
        throw new Error(`Failed to post blog post: ${response.statusText}`);
      }

      setError('');
      setSuccess(true);
      setBlogPostData({
        name: '',
        image: '',
        author_name: '',
        content: '',
        views: 0,
      });
    } catch (error) {
      console.error('Error posting blog post:', error);
      setError(error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlogPostData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="post-blog-form">
      <h2>Create New Blog Post</h2>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">Post created successfully!</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Title:</label>
        <input type="text" id="name" name="name" value={blogPostData.name} onChange={handleChange} required />

        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" name="image" value={blogPostData.image} onChange={handleChange} required />

        <label htmlFor="author_name">Author Name:</label>
        <input type="text" id="author_name" name="author_name" value={blogPostData.author_name} onChange={handleChange} required />

        <label htmlFor="content">Content:</label>
        <textarea id="content" name="content" value={blogPostData.content} onChange={handleChange} rows="5" required />

        <label htmlFor="views">Views:</label>
        <input type="number" id="views" name="views" value={blogPostData.views} onChange={handleChange} disabled /> {/* Set views to 0 and disable the field */}

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default PostBlogForm;
