import { Router } from "express";
import {
  editarSensores,
  enviarAlertas,
  getSensores,
} from "../controllers/sensores.controller";

export const sensores_routes = Router();

sensores_routes.get("/sensores", getSensores);
sensores_routes.put("/sensores", editarSensores);
sensores_routes.get("/alerta/:sensor", enviarAlertas);
