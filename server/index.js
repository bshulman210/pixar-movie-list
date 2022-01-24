const express = require('express');
const app = express();

const PORT = 8080;
app.listen(PORT);

app.get('/', (req, res, next) => {
  res.send('Hello World!');
});
