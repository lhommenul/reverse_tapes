const express = require('express')
let router = express.Router()

// ====== PRODUCT ========
router.route('/product')
  .get(function (req, res) {
    res.send('Get a product')
  })
  .post(function (req, res) {
    res.send('Add a product')
  })
  .put(function (req, res) {
    res.send('Update a product')
  })
// ====== RANGE ========
router.route('/range')
  .get(function (req, res) {
    res.send('Get a range')
  })
  .post(function (req, res) {
    res.send('Add a range')
  })
  .put(function (req, res) {
    res.send('Update a range')
  })

module.exports = router