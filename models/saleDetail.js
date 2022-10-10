const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize = require('../config/db');

const SaleDetail = sequelize.define('SaleDetail', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    saleId: {
        type: DataTypes.INTEGER
    },
    product: {
        type: DataTypes.TEXT
    },
    unitPrice: {
        type: DataTypes.REAL
    },
    quantity: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: false
});

SaleDetail.sync({ alter: true });

module.exports = SaleDetail;