const express = require('express');
const router = express.Router();
const apiRouter = require('./api')
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000


app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});