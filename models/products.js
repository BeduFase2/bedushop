const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize = require('../config/db')

const Products = sequelize.define('Products', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT
    },
    price: {
        type: DataTypes.REAL
    },
    category: {
        type: DataTypes.TEXT
    },
    description: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true,
    timestamps: false
});

Products.sync({ alter: true });

module.exports = Products;