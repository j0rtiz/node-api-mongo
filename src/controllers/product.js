const mongoose = require('mongoose');
const product = mongoose.model('product');

module.exports = {
  async index (req, res) {
    const { page = 1 } = req.query;
    const products = await product.paginate({}, { page, limit: 10 });
    return res.json(products);
  },
  async show (req, res) {
    const products = await product.findById(req.params.id);
    return res.json(products);
  },
  async store (req, res) {
    const products = await product.create(req.body);
    return res.json(products);
  },
  async update (req, res) {
    const products = await product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(products);
  },
  async destroy (req, res) {
    await product.findByIdAndRemove(req.params.id);
    return res.send();
  }
};
