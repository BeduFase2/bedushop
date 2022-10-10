const { Sequelize, DataTypes, Op } = require('sequelize');
const User = require('../models/users');
const Sale = require('../models/sales');
const SaleDetail = require('../models/saleDetail');

function createSale(req, res, next) {
    User.findOne({where : { username : req.auth.username}})
    .then(user  => {
        if (!user) {
            return res.status(401).send("No se encontró el usuario.")
        }
        
        let { products } = req.body;
        
        const sale = Sale.build({
            user: user.username,
            date: new Date(),
            SaleDetails: products
        }, {
            include: [ SaleDetail ]
        });
        
        sale.save().then(response => {
            return res.status(200).json(response);
        })
    }).catch(next);
}

function getSale(req, res) {
    User.findOne({where : { username : req.auth.username}})
    .then(user  => {
        if (!user) {
            return res.status(401).send("No se encontró el usuario.")
        }
        
        Sale.findAll({
            where: {
                user: user.username
            },
            include: {
                model: SaleDetail,
                as: 'SaleDetails',
                required: false
            }
        }).then(response => {
            return res.status(200).json(response);
        });
    });
}

module.exports = {
    createSale,
    getSale
}