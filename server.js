require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;



app.use(express.json());

app.post('/la', (req, res) => {
  console.log(req.body);
  res.json( {mmmm: req.body });
});

app.get('/terry', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/', (req, res) => {
  res.send('Here is some data from the server!');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
});




//"type": "module",