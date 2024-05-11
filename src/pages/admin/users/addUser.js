import React, { useState } from 'react';
import axios from 'axios';

const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
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
      // Gửi yêu cầu POST tới endpoint '/users' trên server
      const response = await axios.post('http://localhost:3001/users', {
        username: formData.username,
        email: formData.email,
        password: formData.password
      });
      
      // Xử lý dữ liệu trả về sau khi tạo người dùng thành công
      alert('New user created:', response.data);
      
      // Xóa dữ liệu trong form sau khi tạo thành công
      setFormData({
        username: '',
        email: '',
        password: ''
      });
    } catch (error) {
      // Xử lý lỗi nếu có
      alert('Error creating user:', error);
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateUserForm;
