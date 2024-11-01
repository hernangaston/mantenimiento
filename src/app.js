import express from "express";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';

import swaggerDocsOtrabajo from './documents/ordenDeTrabajoDoc.js';
import swaggerDocsActivo from './documents/activoDoc.js';


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

//app.use('/api-docs/activo', swaggerUi.serve, swaggerUi.setup(swaggerDocsActivo));

app.use('/api-docs/orden', swaggerUi.serve, swaggerUi.setup(swaggerDocsOtrabajo));


app.use((req, res, next) => {
    res.status(404).send("No existe pagina...");
});


export default app;