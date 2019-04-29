const express = require('express');
const routes = express.Router();
const product = require('./controllers/product');

routes.get('/products', product.index);
routes.get('/products/:id', product.show);
routes.post('/products', product.store);
routes.put('/products/:id', product.update);
routes.delete('/products/:id', product.destroy);

module.exports = routes;
