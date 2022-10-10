const { Sequelize, DataTypes, Op } = require('sequelize');
const express = require('express');
require('dotenv').config();
require('./config/passport');
const { swaggerDocs: V1SwaggerDocs } = require('./swagger')

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sequelize = require('./config/db');

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log(`Enviroment: ${process.env.NODE_ENV}`);
    V1SwaggerDocs(app, PORT);
});

try {
    sequelize.authenticate();
    sequelize.sync();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const errorHandler = function(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {    
        res.status(401).json({"error" : err.name + ": " + err.message})  
    } else {
        return next(err)
    }
}

app.use('/v1', require('./routes'))
app.use(errorHandler)