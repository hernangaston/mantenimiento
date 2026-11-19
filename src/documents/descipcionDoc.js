import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptionsA = {
    swaggerDefinition: {
        components: { securitySchemes: { bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' } } },
        security: [{ bearerAuth: [] }],
        openapi: '3.0.0',
        info: {
            title: 'API de Descripcion',
            version: '1.0.0',
            description: 'Documentación de la API de Descripcion'
        },
    },
    apis: ['./src/controllers/descripcion.controller.js'],
};

const swaggerDocsDescripcion = swaggerJsdoc(swaggerOptionsA);

export default swaggerDocsDescripcion;