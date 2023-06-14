const express = require('express');
const loggerMiddleware = require('./middleware/logger');
const productRoutes = require('./routes/productRoutes');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(loggerMiddleware);

app.use(bodyParser.json()); // Menggunakan body-parser untuk memparsing permintaan dengan format JSON

app.use('/api', productRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});