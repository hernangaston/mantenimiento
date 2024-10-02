import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import loginRoutes from "./routes/login.routes.js";
import edificioRoutes from "./routes/edificio.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({ origin: 'http://localhost:4200', credentials: true })); // Permite CORS para Angular
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("", loginRoutes);
app.use("api/edificio/", edificioRoutes);
app.use("api/dashboard/", dashboardRoutes);

export default app;