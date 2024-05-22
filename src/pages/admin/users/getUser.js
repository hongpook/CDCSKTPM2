import React, { useEffect, useState } from "react";
import { Card, Button, Table, TableHead, TableRow, TableBody, TableCell } from "@mui/material";
import axios from 'axios';
import { Link } from "react-router-dom";

function GetUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/users");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setUsers(json);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
      alert("User đã được xóa!!");
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Placeholder function for handling update
  const handleUpdate = (id) => {
    // Implement update logic here
  };

  return (
    <div>
      <br/>
      <Card>
        <div className="row"> 
          <h2 className="col-9" >User List</h2>
          <Link sx={{backgroundColor: 'green', height: '48px', marginTop: '7px'}} className="col-3" to='create'>Thêm User mới</Link>
        </div>
        <br/>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.password}</TableCell>
                <TableCell>
                  <Button variant="contained" color="error" onClick={() => handleDelete(user.id)}>Delete</Button>
                  <Button variant="contained" color="primary" onClick={() => handleUpdate(user.id)}>Update</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

export default GetUsers;
