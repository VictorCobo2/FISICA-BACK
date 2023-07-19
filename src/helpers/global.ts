import { sensores_model } from "../models/sensores.models";

export const crearSensores = async () => {
  try {
    const SENSORES = [
      {
        nombre: "Sensor 1",
        ubicacion: "NO",
      },
      {
        nombre: "Sensor 2",
        ubicacion: "NO",
      },
    ];

    const VALIDAR = await sensores_model.find();

    if (VALIDAR.length == 0) await sensores_model.insertMany(SENSORES);
  } catch (error) {}
};
