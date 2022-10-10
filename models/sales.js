const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize = require('../config/db');
const SaleDetail = require('./saleDetail');

const Sales = sequelize.define('Sales', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user: {
        type: DataTypes.TEXT
    },
    date: {
        type: DataTypes.DATE
    }
}, {
    freezeTableName: true,
    timestamps: false
});

Sales.hasMany(SaleDetail, {
    foreignKey: 'saleId'
});

SaleDetail.belongsTo(Sales);

Sales.sync({ alter: true });

module.exports = Sales;