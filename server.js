require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`New Request: ${req.method} exactly at ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('<h1>My Week 2 API!</h1>');
});

app.post('/user', (req, res) => {
  const userName = req.body.name;
  const userEmail = req.body.email;

  if (!userName || !userEmail) {
      return res.status(400).send("Error: Name and email are required" );
  }

  res.send(`Hello ${userName}!`);
});


app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ${userId} profile`);
});



app.listen(port, () => {
  console.log(`Server is successfully listening on port ${port}`);
});





//"type": "module",