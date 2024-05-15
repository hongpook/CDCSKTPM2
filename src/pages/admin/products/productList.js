import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Title, useGetList } from "react-admin";
import { Card, TextField, Button, Toolbar, Table, TableHead, TableRow, TableBody, TableCell } from "@mui/material";
import { Link } from 'react-router-dom';

const ProductList = () => {
  
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 10;
  const { total, loading } = useGetList("http://localhost:3001/products", {
    filter: { q: filter },
    pagination: { page, perPage },
    sort: { field: "id", order: "ASC" },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);


  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
      alert("Sản phẩm đã được xóa");
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleUpdate = async (id, newData) => {
    try {
      await axios.put(`http://localhost:3001/products/${id}`, newData);
      const updatedProducts = products.map(product => {
        if (product.id === id) {
          return { ...product, ...newData };
        }
        return product;
      });
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Title title="Product list " />
      <h1>Product List  </h1>
      <TextField
        label="Search"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        variant="filled"
        size="small"
        margin="dense"
      />
      <Link to='create'>Thêm sản phẩm</Link>
      <Card>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell >Id</TableCell>
              <TableCell sx={{ width: '100px' }}>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell><img src={require('../../user/images/products/' + product.image)} alt={product.name} /></TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <Button variant="contained" color="error"  onClick={() => handleDelete(product.id)}>Delete</Button>
                  <Button variant="contained" color="primary"  onClick={() => handleUpdate(product.id, { name: 'Updated Name', price: 100 })}>Update</Button>
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

export default ProductList;
