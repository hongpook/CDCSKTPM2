import React, { useEffect, useState } from "react";
import { Card, TextField, Button, Table, TableHead, TableRow, TableBody, TableCell } from "@mui/material";

function GetUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/users");
      const json = await response.json();
      setUsers(json);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/users/${id}`, {
        method: 'DELETE'
      });
      setUsers(users.filter(user => user.id !== id));
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
      <Card>
        <h2>User List</h2>
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
