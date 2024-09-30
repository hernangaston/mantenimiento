import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import loginRoutes from "./routes/login.routes.js";
import edificioRoutes from "./routes/edificio.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


//app.use(cors());
app.use(cors({
  origin: 'http://localhost:4200',  // Cambia esto a la URL de tu frontend
  credentials: true  // Habilita el envío de cookies en las solicitudes del frontend
}));


/*app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});*/

app.use("", loginRoutes);
app.use("api/", edificioRoutes)

export default app;