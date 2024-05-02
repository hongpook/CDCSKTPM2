const cors = require("cors");
const express = require("express");
const mysql = require("mysql2/promise");
const app = express();
const port = 4000;

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbproduct",
});

// Get Data to Album
app.get("/onepiece", cors(), async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  try {
    const [rows] = await connection.query("SELECT * FROM product_onepiece");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching news");
  }
});


app.get("/flower", cors(), async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  try {
    const [rows] = await connection.query("SELECT * FROM product_flower");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching news");
  }
});

// Get data to Basic

app.get("/product_basic", cors(), async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  try {
    const [rows] = await connection.query("SELECT * FROM product_basic");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching news");
  }
});

// Get data accesory
app.get("/product_accesory1", cors(), async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  try {
    const [rows] = await connection.query("SELECT * FROM product_accesory1");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching news");
  }
});

app.get("/product_accesory2", cors(), async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  try {
    const [rows] = await connection.query("SELECT * FROM product_accesory2");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching news");
  }
});

// Get data to blog

app.get("/blog", cors(), async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  try {
    const [rows] = await connection.query("SELECT * FROM blog");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching news");
  }
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});