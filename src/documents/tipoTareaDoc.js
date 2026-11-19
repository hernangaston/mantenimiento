import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptionsA = {
    swaggerDefinition: {
        components: { securitySchemes: { bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' } } },
        security: [{ bearerAuth: [] }],
        openapi: '3.0.0',
        info: {
            title: 'API de tipo de tarea',
            version: '1.0.0',
            description: 'Documentación de la API de tipo de tarea'
        },
    },
    apis: ['./src/controllers/tipoTarea.controller.js'],
};

const swaggerDocsTipoTarea = swaggerJsdoc(swaggerOptionsA);

export default swaggerDocsTipoTarea;