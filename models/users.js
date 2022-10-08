const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize = require('../config/db')

const Users = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate:{
            isLowercase: true,
            is: /^[a-zA-Z0-9]+$/
        }
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    surname: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    salt: {
        type: DataTypes.TEXT
    },
    hash: {
        type: DataTypes.TEXT
    },
    address: {
        type: DataTypes.TEXT
    },
    card: {
        type: DataTypes.TEXT,
        validate:{
            len: 16,
        }
    },
    type: {
        type: DataTypes.TEXT,
    }
}, {
    freezeTableName: false,
    timestamps: false
});

module.exports = Users;