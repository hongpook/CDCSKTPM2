const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3001;
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'adidas_managerment',
  password: '12345',
  port: 5433,
});

client.connect();

app.use(express.json());


// Read (All tasks)
app.get('/products', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching tasks', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
