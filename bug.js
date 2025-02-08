const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  // Assume 'users' is an array to store user data
  let users = [];

  const newUser = req.body;
  //Error: Check if the request body is empty before processing
  if(Object.keys(req.body).length === 0) {
    return res.status(400).send({ error: 'Request body is empty' });
  }

  users.push(newUser);
  res.status(201).send(newUser);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});