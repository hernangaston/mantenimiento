import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptionsA = {
    swaggerDefinition: {
        components: { securitySchemes: { bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' } } },
        security: [{ bearerAuth: [] }],
        openapi: '3.0.0',
        info: {
            title: 'API de Pisos',
            version: '1.0.0',
            description: 'Documentación de la API de pisos'
        },
    },
    apis: ['./src/controllers/piso.controller.js'],
};

const swaggerDocsPiso = swaggerJsdoc(swaggerOptionsA);

export default swaggerDocsPiso;