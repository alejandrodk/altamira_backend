import { Schema } from 'mongoose';
import { articuloSchema } from './articuloSchema';

export const CarritoSchema = new Schema(
    {
      cliente: {
        type: Number,
        index: true,
        unique: true,
        required: true,
      },
      articulos: {
        type: [articuloSchema],
        default: [],
      },
      descuento: {
        type: Number,
        default: 20,
      },
      total: {
        type: Number,
        default: 0,
      },
    },
    {
      timestamps: true,
    },
);
