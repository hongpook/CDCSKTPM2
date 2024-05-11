import React, { useState } from 'react';
import axios from 'axios';

const UpdateBlogForm = ({ blog, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: blog.name,
    content: blog.content
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Gửi yêu cầu PUT tới endpoint '/blogs/:id' trên server
      const response = await axios.put(`http://localhost:3001/blogs/${blog.id}`, formData);
      
      // Gọi hàm onUpdate để cập nhật bài đăng sau khi cập nhật thành công
      onUpdate(response.data);
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Error updating blog:', error);
    }
  };

  return (
    <div>
      <h2>Update Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Blog Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
};

export default UpdateBlogForm;
