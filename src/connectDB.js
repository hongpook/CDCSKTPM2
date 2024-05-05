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

// get category
app.get('/products/:categoryName', async (req, res) => {
  const { categoryName } = req.params;
  try {
      const query = 'SELECT * FROM products WHERE category = $1';
      const { rows } = await pool.query(query, [categoryName]);
      if (rows.length > 0) {
          res.json(rows);
      } else {
          res.status(404).json({ message: 'No products found in this category' });
      }
  } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

// Get data blog

app.get('/blog', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM blog');
    const data = result.rows;
    client.release();

    res.json(data);
  } catch (error) {
    console.error('Lỗi truy vấn PostgreSQL:', error);
    res.status(500).json({ error: 'Lỗi truy vấn dữ liệu' });
  }
});

// Post blog

app.post('/api/blog', async (req, res) => {
  try {
    const { name, image, content } = req.body;
    await db.none('INSERT INTO blog (name, image, content) VALUES ($1, $2, $3)', [name, image, content]);
    res.status(201).json({ message: 'Blog added successfully' });
  } catch (error) {
    console.error('Error adding blog:', error);
    res.status(500).json({ message: 'Failed to add blog' });
  }
});





// Khởi chạy server
app.listen(port, () => {
  console.log(`Server đã khởi chạy trên cổng ${port}`);
});