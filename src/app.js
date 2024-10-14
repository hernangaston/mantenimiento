import express from "express";
import cors from 'cors';
import cookieParser from 'cookie-parser';

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
app.use("/api/piso", pisoRouter)
app.use("/api/ordenDeTrabajo", odtRouter);



app.use((req, res, next) => {
    res.status(404).send("No existe pagina...");
});


export default app;