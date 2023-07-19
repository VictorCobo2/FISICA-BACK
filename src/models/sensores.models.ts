import { Schema, model } from "mongoose";

interface sensores {
  nombre: string;
  ubicacion: string;
}

const sensores_schema = new Schema<sensores>({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  ubicacion: {
    type: String,
    required: true,
  },
});

export const sensores_model = model<sensores>("sensores", sensores_schema);
