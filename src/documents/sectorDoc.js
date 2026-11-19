import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptionsA = {
    swaggerDefinition: {
        components: { securitySchemes: { bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' } } },
        security: [{ bearerAuth: [] }],
        openapi: '3.0.0',
        info: {
            title: 'API de sector',
            version: '1.0.0',
            description: 'Documentación de la API de sector'
        },
    },
    apis: ['./src/controllers/sector.controller.js'],
};

const swaggerDocsSector = swaggerJsdoc(swaggerOptionsA);

export default swaggerDocsSector;