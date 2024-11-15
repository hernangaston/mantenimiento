import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptionsA = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de tarea',
            version: '1.0.0',
            description: 'Documentación de la API de tarea'
        },
    },
    apis: ['./src/controllers/tarea.controller.js'],
};

const swaggerDocsTarea = swaggerJsdoc(swaggerOptionsA);

export default swaggerDocsTarea;