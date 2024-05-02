const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3001;

// Cấu hình cors
app.use(cors());

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



// Khởi chạy server
app.listen(port, () => {
  console.log(`Server đã khởi chạy trên cổng ${port}`);
});