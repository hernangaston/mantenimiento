import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptionsA = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Login',
            version: '1.0.0',
            description: 'Documentación de la API de login'
        },
    },
    apis: ['./src/controllers/login.controller.js'],
};

const swaggerDocsLogin = swaggerJsdoc(swaggerOptionsA);

export default swaggerDocsLogin;