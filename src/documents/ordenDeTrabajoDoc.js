import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Órdenes de Trabajo',
            version: '1.0.0',
            description: 'Documentación de la API de Órdenes de Trabajo'
        },
    },
    apis: ['./src/controllers/ordenDeTrabajo.controller.js', './src/controllers/activo.controller.js']
};

const swaggerDocsOtrabajo = swaggerJsdoc(swaggerOptions);

export default swaggerDocsOtrabajo;