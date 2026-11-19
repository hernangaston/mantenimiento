import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptionsA = {
    swaggerDefinition: {
        components: { securitySchemes: { bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' } } },
        security: [{ bearerAuth: [] }],
        openapi: '3.0.0',
        info: {
            title: 'API de Activos',
            version: '1.0.0',
            description: 'Documentación de la API de activos'
        },
    },
    apis: ['./src/controllers/activo.controller.js'],
};

const swaggerDocsActivo = swaggerJsdoc(swaggerOptionsA);

export default swaggerDocsActivo;