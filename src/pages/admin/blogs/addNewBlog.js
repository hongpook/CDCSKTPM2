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
    <div className='container'>
      <br/>
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit} className='row'>
        <div className="col-4">
          <label>Blog Name:</label>
          <input
          className="col-12"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-4">
          <label>Image:</label>
          <input
          className="col-12"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className="col-4">
          <label>Author Name:</label>
          <input
          className="col-12"
            type="text"
            name="author_name"
            value={formData.author_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12"> 
          <label>Content:</label>
          <textarea
          className="col-12"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
          />
        </div>
        <div>

        <button className="col-2" type="submit">Create Blog</button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogForm;
