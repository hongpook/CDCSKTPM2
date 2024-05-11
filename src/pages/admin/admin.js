import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  // Hàm lấy danh sách bài đăng từ server khi component được render
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchData();
  }, []); // Chỉ gọi một lần sau khi component được render

  const handleDelete = async (id) => {
    try {
      // Gửi yêu cầu DELETE tới endpoint '/blogs/:id' trên server
      await axios.delete(`http://localhost:3001/blogs/${id}`);

      // Cập nhật danh sách bài đăng sau khi xóa thành công
      setBlogs(blogs.filter(blog => blog.id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handleUpdate = async (id, newData) => {
    try {
      // Gửi yêu cầu PUT tới endpoint '/blogs/:id' trên server
      await axios.put(`http://localhost:3001/blogs/${id}`, newData);

      // Cập nhật danh sách bài đăng sau khi cập nhật thành công
      const updatedBlogs = blogs.map(blog => {
        if (blog.id === id) {
          return { ...blog, ...newData };
        }
        return blog;
      });
      setBlogs(updatedBlogs);
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <div>
      <h2>Blog List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(blog => (
            <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>{blog.name}</td>
              <td>
                <button onClick={() => handleDelete(blog.id)}>Delete</button>
                <button onClick={() => handleUpdate(blog.id, { name: 'Updated Name', content: 'Updated Content' })}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogList;
