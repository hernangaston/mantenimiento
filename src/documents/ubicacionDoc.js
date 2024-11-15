import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptionsA = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de tipo de Ubicacion',
            version: '1.0.0',
            description: 'Documentación de la API de tipo de Ubicacion'
        },
    },
    apis: ['./src/controllers/ubicacion.controller.js'],
};

const swaggerDocsUbicacion = swaggerJsdoc(swaggerOptionsA);

export default swaggerDocsUbicacion;