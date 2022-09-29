const express = require('express');
const router = express.Router();
const Product = require('../models/model')

router.get('/items', async (req, res, next) => {

  const data = await Product.find({})
  res.json(data)

});

router.get('/items/:id', async (req, res, next) => {

  query = {$or:[{name:{$regex: req.params.id, $options: 'i'}},
                {brandName:{$regex: req.params.id, $options: 'i'}},
                {description:{$regex: req.params.id, $options: 'i'}}]}

  const data = await Product.find(query)
  res.json(data)

})

module.exports = router;