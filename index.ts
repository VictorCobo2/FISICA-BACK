import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { sensores_routes } from "./src/routes/sensores.routes";
import { crearSensores } from "./src/helpers/global";

dotenv.config();

console.clear();
crearSensores();

const PORT = process.env.PORT || 9000;
const APP = express();
const MONGO_DB_URI =
  process.env.MONGO_DB_URI || "mongodb://localhost:27017/alertas";

APP.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, x_token ,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

APP.use(express.json());

APP.use("/api", sensores_routes);

APP.listen(PORT, () => {
  console.log(`API escuchando en: http://localhost:${PORT}`);
});

mongoose
  .connect(`${MONGO_DB_URI}`)
  .then(() => {
    console.log("MongoDB conectado correctamente 🟢");
  })
  .catch((error) => {
    console.log("Error al conectar MongoDB 🔴");
    console.log(error);
  });
