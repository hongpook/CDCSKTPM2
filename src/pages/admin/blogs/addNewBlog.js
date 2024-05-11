import React, { useState } from 'react';
import axios from 'axios';

const CreateBlogForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    author_name: '',
    content: ''
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleImageChange = (event) => {
    // Cắt bỏ phần đường dẫn không mong muốn từ tên tệp hình ảnh
    const imageName = event.target.files[0].name;
    setFormData({
      ...formData,
      image: imageName
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Gửi yêu cầu POST tới endpoint '/blogs' trên server
      const response = await axios.post('http://localhost:3001/blogs', formData);
      
      // Xử lý dữ liệu trả về sau khi tạo bài đăng thành công
      console.log('New blog created:', response.data);
      alert("tạo thành công!");
      
      // Xóa dữ liệu trong form sau khi tạo thành công
      setFormData({
        name: '',
        image: '',
        author_name: '',
        content: ''
      });
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Error creating blog:', error);
    }
  };

  return (
    <div>
      <h2>Create Blog</h2>
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
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <label>Author Name:</label>
          <input
            type="text"
            name="author_name"
            value={formData.author_name}
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
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
};

export default CreateBlogForm;
