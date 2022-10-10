const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "bedushop",
            version: "1.0.0"
        }
    },
    apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
    app.use('/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
}

module.exports = { swaggerDocs };