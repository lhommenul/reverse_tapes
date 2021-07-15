const express = require('express')
let router = express.Router()
// ========= SCHEMA =========
const Range = require('./schema/Range');
const Product = require('./schema/Product');
const { response } = require('express');

// ====== PRODUCT ========
router.route('/product')
  .get(function (req, res) {
    console.log(req?.query?.id);
    try {
      Product.findOne({_id:req?.query?.id},(err,doc)=>{
        if (err) {
          res.sendStatus(404)     
        } else {
          res.send(doc)
        }
      })
    } catch (error) {
      res.sendStatus(404) 
    }
  })
  .post(function (req, res) {
      try {
        new Product({
            parent_id: req?.body?.parent_id,
            type: req?.body?.type,
            size: req?.body?.size,
            price: JSON.parse(req.body.price),
            quantity: JSON.parse(req?.body?.quantity),
            description: req?.body?.description,
            pictures: JSON.parse(req?.body?.pictures),
            date: req?.body?.date,
            iframe: req?.body?.iframe,
          }).save()
          .then(e=>{
              res.send(e._id)
          })
          .catch(err=>{
              console.error(err);
          })
      } catch (error) {
          console.log(error);
          res.status(404)
      }
  })
  .put(function (req, res) {
    res.send('Update a product')
  })
  .delete(function (req, res) {
    res.send('Delete a product')
  })
// ====== RANGE ========
router.route('/range')
  .get(function (req, res) {
    let limit = req?.query?.limit;
    let id = req?.query?.id;
    if(id){
      try {
        Range.findOne({_id:id},(err,doc)=>{
          if (err) {
            res.sendStatus(404)
          } else {
            res.send(doc)
          }
        })
      } catch (error) {
        res.sendStatus(404)
      }
    }else{
      try {
        Range.find((err,docs)=>{
          if (err) {
            res.sendStatus(404)
          } else {
            res.send(docs)
          }
        }).limit(limit)
      } catch (error) {
        res.sendStatus(404)
      }
    }
  })
  .post(function (req, res) {
    try {
        new Range({
            type:req?.body?.type,
            products:JSON.parse(req?.body?.products),
            visibility:req?.body?.visibility,
            description:req?.body?.description,
            pictures:JSON.parse(req?.body?.pictures),
            date:req?.body?.date,
        }).save()
        .then(e=>{
            res.send(e._id)
        })
        .catch(e=>{
            console.error(e);
        })
    } catch (error) {
        res.status(404)
    }
  })
  .put(function (req, res) {
    res.send('Update a range')
  })
  .delete(function (req, res) {
    res.send('Delete a range')
  })

module.exports = router;