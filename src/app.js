import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import loginRoutes from "./routes/login.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors());

/*app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});*/

app.use("", loginRoutes);

export default app;