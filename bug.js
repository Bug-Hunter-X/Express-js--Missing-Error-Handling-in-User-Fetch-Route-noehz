const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... database query to fetch user with userId ...
  if (!user) {
    return res.status(404).send('User not found'); // Correct handling of missing user
  }
  res.send(user); // Potential error: Missing error handling if database query fails
});