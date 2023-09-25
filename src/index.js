const express = require('express');
const pool = require('./models/db');
const app = express();
const port = 3000;

app.use(express.json());

// Test DB connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
  } else {
    console.log('Database connected:', res.rows[0]);
  }
});

app.use(express.json());

// TODO: Add routes and middleware

// const projects = require('./routes/projects');
// const expenses = require('./routes/expenses');

// app.use('/projects', projects);
// app.use('/expenses', expenses);


app.get('/', (req, res) => {
  res.send('Lets make an expense tracker!');
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
