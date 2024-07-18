const express = require('express');
const router = express.Router();
const apiRouter = require('./api')
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000

const { environment } = require('./config');
const isProduction = environment === 'production';

app.use(morgan('dev'));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});