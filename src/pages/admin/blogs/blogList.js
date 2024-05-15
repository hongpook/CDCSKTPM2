import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Title, useGetList } from "react-admin";
import { Card, TextField, Button, Toolbar, Table, TableHead, TableRow, TableBody, TableCell } from "@mui/material";
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 10;
  const { total, loading } = useGetList("http://localhost:3001/blogs", {
    filter: { q: filter },
    pagination: { page, perPage },
    sort: { field: "id", order: "ASC" },
  });

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
  }, []);


  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/blogs/${id}`);
      setBlogs(blogs.filter(blog => blog.id !== id));
      alert("bài viết đã được xóa");
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handleUpdate = async (id, newData) => {
    try {
      await axios.put(`http://localhost:3001/blogs/${id}`, newData);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Title title="Blog list" />
      <h1>Blog List</h1>
      <TextField
        label="Search"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        variant="filled"
        size="small"
        margin="dense"
      />
      <Link to={'create'}>Thêm bài viết</Link>
      <Card>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell >Id</TableCell>
              <TableCell sx={{ width: '150px' }}>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Views</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs.map(blog => (
              <TableRow key={blog.id}>
                <TableCell>{blog.id}</TableCell>
                <TableCell><img src= {require('../../user/images/blogs/' + blog.image)} t /></TableCell>
                <TableCell>{blog.name}</TableCell>
                <TableCell>{blog.views}</TableCell>
                <TableCell>
                  <Button variant="contained" color="error"  onClick={() => handleDelete(blog.id)}>Delete</Button>
                  <Button variant="contained" color="primary"  onClick={() => handleUpdate(blog.id, { name: 'Updated Name', content: 'Updated Content' })}>Update</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      <Toolbar>
        {page > 1 && <Button onClick={() => setPage(page - 1)}>Previous page</Button>}
        {page < (total || 0) / perPage && <Button onClick={() => setPage(page + 1)}>Next page</Button>}
      </Toolbar>
    </div>
  );
};

export default BlogList;