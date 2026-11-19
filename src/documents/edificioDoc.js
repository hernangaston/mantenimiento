import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptionsA = {
    swaggerDefinition: {
        components: { securitySchemes: { bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' } } },
        security: [{ bearerAuth: [] }],
        openapi: '3.0.0',
        info: {
            title: 'API de Edificios',
            version: '1.0.0',
            description: 'Documentación de la API de edificios'
        },
    },
    apis: ['./src/controllers/edificio.controller.js'],
};

const swaggerDocsEdificio = swaggerJsdoc(swaggerOptionsA);

export default swaggerDocsEdificio;