import express from "express";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';

import loginRoutes from "./routes/login.routes.js";
import edificioRoutes from "./routes/edificio.routes.js";
import tagRoutes from "./routes/tag.routes.js";
import activoRoutes from "./routes/activo.routes.js";
import tipoTareaRoutes from "./routes/tipoTarea.routes.js"
import tareaRoutes from "./routes/tarea.routes.js";
import activoTareaRoutes from "./routes/activoTarea.routes.js";
import ubicacionRoutes from "./routes/ubicacion.routes.js";
import pisoRouter from "./routes/piso.routes.js";
import odtRouter from "./routes/ordenDeTrabajo.routes.js";
import sectorRouter from "./routes/sector.routes.js";
import operarioRouter from "./routes/operario.routes.js";
import descRouter from "./routes/descripcion.routes.js";

import swaggerDocsOtrabajo from './documents/ordenDeTrabajoDoc.js';
import swaggerDocsActivo from './documents/activoDoc.js';
import swaggerDocsActivoTarea from './documents/activoTareaDoc.js';
import swaggerDocsDescripcion from './documents/descipcionDoc.js';
import swaggerDocsEdificio from './documents/edificioDoc.js';
import swaggerDocsLogin from './documents/loginDoc.js';
import swaggerDocsOperario from './documents/operarioDoc.js';
import swaggerDocsPiso from './documents/pisoDoc.js';
import swaggerDocsSector from './documents/sectorDoc.js';
import swaggerDocsTag from './documents/tagDocument.js';
import swaggerDocsTarea from './documents/tareaDoc.js';
import swaggerDocsTipoTarea from './documents/tipoTareaDoc.js';
import swaggerDocsUbicacion from './documents/ubicacionDoc.js';

const app = express();

app.use(cors({ origin: 'http://localhost:4200', credentials: true })); 
app.use(express.json());
app.use(cookieParser());


app.use("", loginRoutes);
app.use("/api/edificio", edificioRoutes);
app.use("/api/tag", tagRoutes);
app.use("/api/activo", activoRoutes);
app.use("/api/tipoTarea", tipoTareaRoutes);
app.use("/api/tarea", tareaRoutes);
app.use("/api/activoTarea", activoTareaRoutes);
app.use("/api/ubicacion", ubicacionRoutes);
app.use("/api/piso", pisoRouter);
app.use("/api/sector", sectorRouter);
app.use("/api/orden", odtRouter);
app.use("/api/operario", operarioRouter);
app.use("/api/descripcion", descRouter);

app.use('/api-docs/activo', swaggerUi.serveFiles(swaggerDocsActivo), swaggerUi.setup(swaggerDocsActivo));
app.use('/api-docs/orden', swaggerUi.serveFiles(swaggerDocsOtrabajo), swaggerUi.setup(swaggerDocsOtrabajo));
app.use('/api-docs/activoTarea', swaggerUi.serveFiles(swaggerDocsActivoTarea), swaggerUi.setup(swaggerDocsActivoTarea));
app.use('/api-docs/descripcion', swaggerUi.serveFiles(swaggerDocsDescripcion), swaggerUi.setup(swaggerDocsDescripcion));
app.use('/api-docs/edificio', swaggerUi.serveFiles(swaggerDocsEdificio), swaggerUi.setup(swaggerDocsEdificio));
app.use('/api-docs/login', swaggerUi.serveFiles(swaggerDocsLogin), swaggerUi.setup(swaggerDocsLogin));
app.use('/api-docs/operario', swaggerUi.serveFiles(swaggerDocsOperario), swaggerUi.setup(swaggerDocsOperario));
app.use('/api-docs/piso', swaggerUi.serveFiles(swaggerDocsPiso), swaggerUi.setup(swaggerDocsPiso));
app.use('/api-docs/sector', swaggerUi.serveFiles(swaggerDocsSector), swaggerUi.setup(swaggerDocsSector));
app.use('/api-docs/tag', swaggerUi.serveFiles(swaggerDocsTag), swaggerUi.setup(swaggerDocsTag));
app.use('/api-docs/tarea', swaggerUi.serveFiles(swaggerDocsTarea), swaggerUi.setup(swaggerDocsTarea));
app.use('/api-docs/tipoTarea', swaggerUi.serveFiles(swaggerDocsTipoTarea), swaggerUi.setup(swaggerDocsTipoTarea));
app.use('/api-docs/ubicacion', swaggerUi.serveFiles(swaggerDocsUbicacion), swaggerUi.setup(swaggerDocsUbicacion));

app.use((req, res, next) => {
    res.status(404).send("No existe pagina...");
});


export default app;