const { Sequelize, DataTypes, Op } = require('sequelize');
const Review = require('../models/review');

function createReview(req, res) {
    const body = req.body;
    Review.create(body)
    .then(review => 
        res.status(201).send(review)
    )
    .catch(() => 
        res.status(400).send('Error')
    )
}

function getAllReviews(req, res) {
    Review.findAll()
    .then(review => 
        res.status(200).send(review)
    )
    .catch(() => 
        res.status(400).send('Error')
    )
}

function getReviewById(req,res)
{
    const productID = req.params.productID;
    const saleID = req.params.saleID;
    Review.findAll({where:{
        productID: { [Op.eq]: productID},
        saleID: { [Op.eq]: saleID}
      }
      })
    .then(review => 
        res.status(200).send(review)    
    )
    .catch(() => 
        res.status(400).send('Error')
    )
}

function updateReview(req,res)
{
    const body = req.body;
    const productID = req.params.productID;
    const saleID = req.params.saleID;
    Review.update(body, {
        where: {
        productID: { [Op.eq]: productID},
        saleID: { [Op.eq]: saleID}
        }
    })
    .then(review =>
        res.status(201).send(review)
    )
    .catch(() => 
        res.status(400).send('Error')
    )
}

function deleteReview(req, res) {
    const productID = req.params.productID;
    const saleID = req.params.saleID;
    Review.destroy({
      where: {
        productID: { [Op.eq]: productID},
        saleID: { [Op.eq]: saleID}
      }
    })
    .then(r =>
      res.status(201).send(`Se elimino la reseña del producto ${productID} y la venta ${saleID}`)
    )
    .catch(() => 
          res.status(400).send('Error')
      )
  }

module.exports = {
    createReview,
    getAllReviews,
    getReviewById,
    updateReview,
    deleteReview
  }