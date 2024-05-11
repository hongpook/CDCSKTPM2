const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Cấu hình cors
app.use(cors());
app.use(bodyParser.json());

// Cấu hình kết nối PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'adidas_managerment',
  password: '12345',
  port: 5433, // Port mặc định của PostgreSQL
});

// Tạo một endpoint để lấy dữ liệu từ PostgreSQL
app.get('/products', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM products');
    const data = result.rows;
    client.release();

    res.json(data);
  } catch (error) {
    console.error('Lỗi truy vấn PostgreSQL:', error);
    res.status(500).json({ error: 'Lỗi truy vấn dữ liệu' });
  }
});

// API endpoint để lấy chi tiết sản phẩm dựa trên ID
app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
      const query = 'SELECT * FROM products WHERE id = $1';
      const { rows } = await pool.query(query, [id]);
      if (rows.length === 1) {
          res.json(rows[0]);
      } else {
          res.status(404).json({ message: 'Product not found' });
      }
  } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint for creating a product
app.post('/products', async (req, res) => {
  try {
    // Extract product data from request body
    const { 
      name, 
      image, 
      price, 
      sale, 
      category, 
      tags, 
      imgdetail_1, 
      imgdetail_2, 
      imgdetail_3, 
      descriptions, 
      color, 
      product_info 
    } = req.body;

    // Insert product data into the database
    const query = `
      INSERT INTO products (
        name, 
        image, 
        price, 
        sale, 
        category, 
        tags, 
        imgdetail_1, 
        imgdetail_2, 
        imgdetail_3, 
        descriptions, 
        color, 
        product_info
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING *
    `;
    const values = [
      name, 
      image, 
      price, 
      sale, 
      category, 
      tags, 
      imgdetail_1, 
      imgdetail_2, 
      imgdetail_3, 
      descriptions, 
      color, 
      product_info
    ];
    const result = await pool.query(query, values);

    // Return the newly created product
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// Endpoint for deleting a product by ID
app.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Execute DELETE query to remove the product from the database
    const result = await pool.query('DELETE FROM products WHERE id = $1', [id]);

    // Check if any rows were affected
    if (result.rowCount === 1) {
      res.json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});




// Define a route to fetch data from the blogs table
app.get('/blogs', async (req, res) => {
  try {
    // Connect to the database
    const client = await pool.connect();
    const query = 'SELECT * FROM blogs';
    const result = await client.query(query);
    client.release();
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// API endpoint để lấy chi tiết bài viết dựa trên ID
app.get('/blogs/:id', async (req, res) => {
  const { id } = req.params;
  try {
      const query = 'SELECT * FROM blogs WHERE id = $1';
      const { rows } = await pool.query(query, [id]);
      if (rows.length === 1) {
          res.json(rows[0]);
      } else {
          res.status(404).json({ message: 'blog not found' });
      }
  } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint for creating a blog post
app.post('/blogs', async (req, res) => {
  try {
    // Extract blog post data from request body
    const { name, image, author_name, content } = req.body;

    // Insert blog post data into the database
    const query = `
      INSERT INTO blogs (name, image, author_name, content)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const values = [name, image, author_name, content];
    const result = await pool.query(query, values);

    // Return the newly created blog post
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({ error: 'Failed to create blog post' });
  }
});

// Endpoint for deleting a blog post by ID
app.delete('/blogs/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Execute DELETE query to remove the blog post from the database
    const result = await pool.query('DELETE FROM blogs WHERE id = $1', [id]);

    // Check if any rows were affected
    if (result.rowCount === 1) {
      res.json({ message: 'Blog post deleted successfully' });
    } else {
      res.status(404).json({ error: 'Blog post not found' });
    }
  } catch (error) {
    console.error('Error deleting blog post:', error);
    res.status(500).json({ error: 'Failed to delete blog post' });
  }
});

// Endpoint để cập nhật một bài đăng theo ID
app.put('/blogs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, content } = req.body;

    // Thực thi truy vấn UPDATE để cập nhật bài đăng trong cơ sở dữ liệu
    const result = await pool.query('UPDATE blogs SET name = $1, content = $2 WHERE id = $3 RETURNING *', [name, content, id]);

    // Kiểm tra xem có bài đăng nào được cập nhật không
    if (result.rowCount === 1) {
      res.json(result.rows[0]); // Trả về bài đăng sau khi cập nhật thành công
    } else {
      res.status(404).json({ error: 'Blog post not found' });
    }
  } catch (error) {
    console.error('Error updating blog post:', error);
    res.status(500).json({ error: 'Failed to update blog post' });
  }
});


// Define a route to fetch data from the blogs table
app.get('/users', async (req, res) => {
  try {
    // Connect to the database
    const client = await pool.connect();
    const query = 'SELECT * FROM users';
    const result = await client.query(query);
    client.release();
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// API endpoint để lấy chi tiết bài viết dựa trên ID
app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
      const query = 'SELECT * FROM users WHERE id = $1';
      const { rows } = await pool.query(query, [id]);
      if (rows.length === 1) {
          res.json(rows[0]);
      } else {
          res.status(404).json({ message: 'users not found' });
      }
  } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint for creating a user
app.post('/users', async (req, res) => {
  try {
    // Extract user data from request body
    const { username, email, password } = req.body;

    // Insert user data into the database
    const query = `
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
    const values = [username, email, password];
    const result = await pool.query(query, values);

    // Return the newly created user
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});



// Khởi chạy server
app.listen(port, () => {
  console.log(`Server đã khởi chạy trên cổng ${port}`);
});