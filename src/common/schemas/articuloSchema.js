import { Schema } from 'mongoose';

export const articuloSchema = new Schema(
    {
      codigo: {
        type: String,
        required: true,
      },
      cantidad: {
        type: Number,
        required: true,
      },
      minVta: {
        type: Number,
        required: true,
      },
      stock: {
        type: Number,
        required: true,
      },
      precio: {
        type: Number,
        required: true,
      },
      descripcion: {
        type: String,
        required: true,
      },
      caracteristicas: {
        type: String,
        required: true,
      },
    },
    {
      _id: false,
      id: false,
      timestamps: false,
    },
);
