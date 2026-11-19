# Sistema de gestión de mantenimiento — API

Backend de un sistema para gestionar el mantenimiento de edificios: activos, ubicaciones, tareas, operarios y órdenes de trabajo.

Proyecto final de la Tecnicatura Universitaria en Programación (UTN), 2024. El frontend está en [mantenimiento_front](https://github.com/hernangaston/mantenimiento_front).

## Qué resuelve

El área de mantenimiento necesita saber qué activos hay, dónde está cada uno (edificio, piso, sector, ubicación), qué tareas requiere y quién las hace. El sistema registra todo eso y genera órdenes de trabajo asignadas a operarios.

## Stack

- Node.js y Express (ES modules)
- MySQL con `mysql2`
- Autenticación con bcrypt y JWT
- Documentación de la API con Swagger (`swagger-jsdoc` y `swagger-ui-express`)
- Docker y Docker Compose para la base de datos

## Endpoints

Cada recurso expone un CRUD bajo `/api`:

| Recurso | Ruta |
| --- | --- |
| Órdenes de trabajo | `/api/orden` |
| Activos | `/api/activo` |
| Tareas por activo | `/api/activoTarea` |
| Tareas y tipos de tarea | `/api/tarea`, `/api/tipoTarea` |
| Edificios, pisos, sectores, ubicaciones | `/api/edificio`, `/api/piso`, `/api/sector`, `/api/ubicacion` |
| Operarios | `/api/operario` |
| Tags y descripciones | `/api/tag`, `/api/descripcion` |
| Registro y login (sin token) | `/registro`, `/login` |

La documentación de cada recurso está en `/api-docs/<recurso>` (por ejemplo, `http://localhost:3000/api-docs/orden`).

## Modelo de datos

El esquema de las tablas está en `mantenimiento.db` (script SQL).

## Correr en local

1. Crear un archivo `.env` en la raíz:

```
NODE_DOCKER_PORT=3000
MYSQLDB_HOST=localhost
MYSQLDB_USER=root
MYSQLDB_ROOT_PASSWORD=<contraseña>
MYSQLDB_DATABASE=mantenimiento
MYSQLDB_DOCKER_PORT=3306
MYSQLDB_LOCAL_PASSWORD=<contraseña>
MYSQLDB_LOCAL_DATABASE=mantenimiento
MYSQLDB_LOCAL_PORT=3306
JWT_SECRET=<un secreto largo>
```

2. Levantar MySQL y cargar el esquema:

```bash
docker compose up -d
mysql -h 127.0.0.1 -u root -p mantenimiento < mantenimiento.db
```

3. Instalar dependencias y arrancar:

```bash
npm install
npm run dev
# http://localhost:3000
```

## Seguridad

- Todas las rutas `/api/*` exigen el header `Authorization: Bearer <token>`; sin token válido responden 401.
- El token se obtiene en `/login`, dura 15 minutos e incluye el email y el rol del usuario.
- El registro público solo crea usuarios con rol `usuario` u `operario`. Un administrador se asigna directamente en la base de datos.

## Pendientes

- Controlar permisos por rol en el backend (hoy cualquier usuario autenticado accede a todos los recursos).
- Agregar tests de los endpoints.
