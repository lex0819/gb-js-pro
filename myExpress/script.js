const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('Connection to server has setuped');
});

app.get('/', (req, res) => {
  res.send('<h1>Response from server!!!</h1><h2>Hi, Lex!</h2>');
});
