import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptionsA = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Activo Tareas',
            version: '1.0.0',
            description: 'Documentación de la API de activo tareas'
        },
    },
    apis: ['./src/controllers/activoTarea.controller.js'],
};

const swaggerDocsActivoTarea = swaggerJsdoc(swaggerOptionsA);

export default swaggerDocsActivoTarea;