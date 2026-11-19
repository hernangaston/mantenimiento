import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptionsA = {
    swaggerDefinition: {
        components: { securitySchemes: { bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' } } },
        security: [{ bearerAuth: [] }],
        openapi: '3.0.0',
        info: {
            title: 'API de tag',
            version: '1.0.0',
            description: 'Documentación de la API de tag'
        },
    },
    apis: ['./src/controllers/tag.controller.js'],
};

const swaggerDocsTag = swaggerJsdoc(swaggerOptionsA);

export default swaggerDocsTag;