const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { createProduct } = require('./controllers/products');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRoutes = express.Router();

apiRoutes.get('/api/posts', routes.getPosts);
apiRoutes.post('/api/users', routes.createUsers);
apiRoutes.get('/api/users', routes.getUsers);
apiRoutes.post('/api/login', routes.login);
apiRoutes.post('/api/products', createProduct);

app.use(apiRoutes);

module.exports = app;
