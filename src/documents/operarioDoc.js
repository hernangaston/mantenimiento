import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptionsA = {
    swaggerDefinition: {
        components: { securitySchemes: { bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' } } },
        security: [{ bearerAuth: [] }],
        openapi: '3.0.0',
        info: {
            title: 'API de Operarios',
            version: '1.0.0',
            description: 'Documentación de la API de operarios'
        },
    },
    apis: ['./src/controllers/operario.controller.js'],
};

const swaggerDocsOperario = swaggerJsdoc(swaggerOptionsA);

export default swaggerDocsOperario;